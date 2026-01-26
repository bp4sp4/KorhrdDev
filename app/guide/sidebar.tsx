"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./sidebar.module.css";

type MenuItemWithChildren = {
  label: string;
  children: MenuItem[];
};

type MenuItemWithHref = {
  href: string;
  label: string;
  disabled?: boolean;
};

type MenuItem = MenuItemWithChildren | MenuItemWithHref;

const menuItems: MenuItem[] = [
  { href: "/guide/introduction", label: "가이드 소개" },
  { href: "/guide/file-structure", label: "기본 파일 구조" },
  {
    label: "CSS 초기 세팅",
    children: [
      { href: "/guide/css-foundation/overview", label: "개요" },
      {
        label: "초기세팅",
        children: [
          { href: "/guide/css-foundation/normalize", label: "normalize.css" },
          {
            href: "/guide/css-foundation/pretendard",
            label: "Pretendard 폰트 설정",
          },
          { href: "/guide/css-foundation/tokens", label: "tokens.css" },
          { href: "/guide/css-foundation/base", label: "base.css" },
          {
            href: "/guide/css-foundation/layout",
            label: "layout.css(X)",
            disabled: true,
          },
          {
            href: "/guide/css-foundation/components",
            label: "components.css(X)",
            disabled: true,
          },
        ],
      },
      {
        label: "Typography",
        children: [
          {
            href: "/guide/css-foundation/typography/display",
            label: "Display",
          },
          { href: "/guide/css-foundation/typography/title", label: "Title" },
          {
            href: "/guide/css-foundation/typography/headline",
            label: "Headline",
          },
          { href: "/guide/css-foundation/typography/body", label: "Body" },
          { href: "/guide/css-foundation/typography/label", label: "Label" },
        ],
      },
      { href: "/guide/css-foundation/spacing", label: "Spacing" },
    ],
  },
  { href: "/guide/layout-tsx", label: "layout.tsx 가이드" },
  { href: "/guide/environment-variables", label: "환경 변수 관리" },
  {
    label: "클래스명 가이드",
    children: [
      { href: "/guide/class-naming/overview", label: "개요" },
      { href: "/guide/class-naming/layout", label: "레이아웃" },
      { href: "/guide/class-naming/component", label: "컴포넌트" },
      {
        href: "/guide/class-naming/button",
        label: "버튼 (미완성)",
        disabled: true,
      },
      { href: "/guide/class-naming/text", label: "텍스트" },
      { href: "/guide/class-naming/examples", label: "예제" },
    ],
  },
  { href: "/guide/color-palette", label: "색상 팔레트" },
  { href: "/guide/logo-guide", label: "로고 가이드" },
  { href: "/guide/image-icon-guide", label: "이미지 & 아이콘 가이드" },
  { href: "/guide/responsive-design", label: "반응형 디자인 가이드" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});
  const [activePath, setActivePath] = useState<string | null>(null);

  // 클라이언트에서만 pathname 기반으로 초기 메뉴 상태 계산
  useEffect(() => {
    setMounted(true);
    setActivePath(pathname || null);

    const initialOpenMenus: Record<string, boolean> = {};
    const initialOpenSubMenus: Record<string, boolean> = {};

    if (pathname) {
      menuItems.forEach((item, index) => {
        if ("children" in item && item.children) {
          const isParentActive = item.children.some((child) => {
            if ("children" in child && child.children) {
              return child.children.some(
                (grandchild) =>
                  "href" in grandchild && pathname === grandchild.href,
              );
            }
            return "href" in child && pathname === child.href;
          });
          if (isParentActive) {
            initialOpenMenus[`menu-${index}`] = true;

            item.children.forEach((child, childIndex) => {
              if ("children" in child && child.children) {
                const isChildParentActive = child.children.some(
                  (grandchild) =>
                    "href" in grandchild && pathname === grandchild.href,
                );
                if (isChildParentActive) {
                  initialOpenSubMenus[`submenu-${index}-${childIndex}`] = true;
                }
              }
            });
          }
        }
      });

      setOpenMenus(initialOpenMenus);
      setOpenSubMenus(initialOpenSubMenus);
    }
  }, [pathname]);

  // 서버와 클라이언트 초기 렌더링 일치를 위해 mounted 전까지는 항상 닫힌 상태
  const getMenuState = (menuKey: string) => {
    if (!mounted) return false;
    return openMenus[menuKey] ?? false;
  };

  const getSubMenuState = (subMenuKey: string) => {
    if (!mounted) return false;
    return openSubMenus[subMenuKey] ?? false;
  };

  const toggleMenu = (menuKey: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  const toggleSubMenu = (subMenuKey: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [subMenuKey]: !prev[subMenuKey],
    }));
  };

  return (
    <aside className={`layout_sidebar ${styles.sidebar}`}>
      <div className={styles.header}>
        <Link href="/" className={styles.logo_container}>
          <img
            src="/images/한평생그룹_default_black@2x.png"
            alt="logo"
            className={styles.logo_image}
          />
        </Link>
      </div>

      <nav className={styles.nav} suppressHydrationWarning>
        <ul className={styles.navList} suppressHydrationWarning>
          {menuItems.map((item, index) => {
            if ("children" in item && item.children) {
              const menuKey = `menu-${index}`;
              const isParentActive =
                mounted && activePath
                  ? item.children.some((child) => {
                      if ("children" in child && child.children) {
                        return child.children.some(
                          (grandchild) =>
                            "href" in grandchild &&
                            activePath === grandchild.href,
                        );
                      }
                      return "href" in child && activePath === child.href;
                    })
                  : false;
              const isOpen = getMenuState(menuKey);
              // 메뉴가 열려있고 활성화된 자식이 있을 때만 파란색 표시
              const shouldShowActive = isOpen && isParentActive;

              return (
                <li key={index} className={styles.navItem}>
                  <button
                    className={`${styles.navParent} ${styles.navParentButton} ${
                      shouldShowActive ? styles.navParentActive : ""
                    }`}
                    onClick={() => toggleMenu(menuKey)}
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`${styles.chevron} ${
                        isOpen ? styles.chevronOpen : styles.chevronClosed
                      }`}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <ul
                    className={`${styles.navSubList} ${
                      isOpen ? styles.navSubListOpen : styles.navSubListClosed
                    }`}
                  >
                    {item.children.map((child, childIndex) => {
                      if ("children" in child && child.children) {
                        const isChildParentActive =
                          mounted && activePath
                            ? child.children.some(
                                (grandchild) =>
                                  "href" in grandchild &&
                                  activePath === grandchild.href,
                              )
                            : false;
                        const subMenuKey = `submenu-${index}-${childIndex}`;
                        const isSubOpen = getSubMenuState(subMenuKey);

                        return (
                          <li key={child.label} className={styles.navSubItem}>
                            <button
                              className={`${styles.navSubParent} ${
                                styles.navSubParentButton
                              } ${
                                isChildParentActive && isSubOpen
                                  ? styles.navSubParentActive
                                  : ""
                              }`}
                              onClick={() => toggleSubMenu(subMenuKey)}
                            >
                              <span>{child.label}</span>
                              <svg
                                className={`${styles.chevron} ${
                                  styles.chevronSmall
                                } ${
                                  isSubOpen
                                    ? styles.chevronOpen
                                    : styles.chevronClosed
                                }`}
                                width="14"
                                height="14"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4 6L8 10L12 6"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                            <ul
                              className={`${styles.navSubSubList} ${
                                isSubOpen
                                  ? styles.navSubSubListOpen
                                  : styles.navSubSubListClosed
                              }`}
                            >
                              {child.children.map((grandchild) => {
                                if ("href" in grandchild) {
                                  const isActive =
                                    mounted && activePath === grandchild.href;
                                  if (grandchild.disabled) {
                                    return (
                                      <li
                                        key={grandchild.href}
                                        className={styles.navSubSubItem}
                                      >
                                        <span
                                          className={styles.navLinkDisabled}
                                        >
                                          {grandchild.label}
                                        </span>
                                      </li>
                                    );
                                  }
                                  return (
                                    <li
                                      key={grandchild.href}
                                      className={styles.navSubSubItem}
                                    >
                                      <Link
                                        href={grandchild.href}
                                        className={`${styles.navLink} ${
                                          isActive
                                            ? styles.navLinkActive
                                            : styles.navLinkInactive
                                        }`}
                                      >
                                        {grandchild.label}
                                      </Link>
                                    </li>
                                  );
                                }
                                return null;
                              })}
                            </ul>
                          </li>
                        );
                      } else if ("href" in child) {
                        const isActive = mounted && activePath === child.href;
                        if (child.disabled) {
                          return (
                            <li key={child.href} className={styles.navSubItem}>
                              <span className={styles.navLinkDisabled}>
                                {child.label}
                              </span>
                            </li>
                          );
                        }
                        return (
                          <li key={child.href} className={styles.navSubItem}>
                            <Link
                              href={child.href}
                              className={`${styles.navLink} ${
                                isActive
                                  ? styles.navLinkActive
                                  : styles.navLinkInactive
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      }
                      return null;
                    })}
                  </ul>
                </li>
              );
            } else if ("href" in item) {
              const isActive = mounted && activePath === item.href;
              return (
                <li key={item.href} className={styles.navItem}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${
                      isActive ? styles.navLinkActive : styles.navLinkInactive
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </nav>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.version}>v1.0.1</div>
          <Link href="/guide/changelog" className={styles.changelogLink}>
            릴리즈 노트
          </Link>
        </div>
      </footer>
    </aside>
  );
}
