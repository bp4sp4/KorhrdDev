'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './sidebar.module.css'
import Image from 'next/image'

type MenuItemWithChildren = {
  label: string
  children: MenuItem[]
}

type MenuItemWithHref = {
  href: string
  label: string
}

type MenuItem = MenuItemWithChildren | MenuItemWithHref

const menuItems: MenuItem[] = [
  { href: '/guide/introduction', label: '가이드 소개' },
  { href: '/guide/file-structure', label: '기본 파일 구조' },
  {
    label: '클래스명 가이드',
    children: [
      { href: '/guide/class-naming/overview', label: '개요' },
      { href: '/guide/class-naming/layout', label: '레이아웃' },
      { href: '/guide/class-naming/component', label: '컴포넌트' },
      { href: '/guide/class-naming/button', label: '버튼' },
      { href: '/guide/class-naming/text', label: '텍스트' },
      { href: '/guide/class-naming/state', label: '상태' },
      { href: '/guide/class-naming/examples', label: '예제' },
    ],
  },
    {
      label: 'CSS 초기 세팅',
      children: [
        { href: '/guide/css-foundation/overview', label: '개요' },
        {
          label: '초기세팅',
          children: [
            { href: '/guide/css-foundation/normalize', label: 'normalize.css' },
            { href: '/guide/css-foundation/tokens', label: 'tokens.css' },
            { href: '/guide/css-foundation/base', label: 'base.css' },
            { href: '/guide/css-foundation/layout', label: 'layout.css' },
            { href: '/guide/css-foundation/components', label: 'components.css' },
          ],
        },
        {
          label: 'Typography',
          children: [
            { href: '/guide/css-foundation/typography/display', label: 'Display' },
            { href: '/guide/css-foundation/typography/title', label: 'Title' },
            { href: '/guide/css-foundation/typography/heading', label: 'Heading' },
            { href: '/guide/css-foundation/typography/headline', label: 'Headline' },
            { href: '/guide/css-foundation/typography/body', label: 'Body' },
            { href: '/guide/css-foundation/typography/label', label: 'Label' },
            { href: '/guide/css-foundation/typography/caption', label: 'Caption' },
          ],
        },
        { href: '/guide/css-foundation/spacing', label: 'Spacing' },
      ],
    },
  { href: '/guide/color-palette', label: '색상 팔레트' },
  { href: '/guide/layout-guide', label: '레이아웃 가이드' },
  { href: '/guide/logo-guide', label: '로고 가이드' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({})
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({})

  // 초기 로드 시 활성화된 메뉴 자동으로 열기
  useEffect(() => {
    const initialOpenMenus: Record<string, boolean> = {}
    const initialOpenSubMenus: Record<string, boolean> = {}

    menuItems.forEach((item, index) => {
      if ('children' in item && item.children) {
        const isParentActive = item.children.some(child => {
          if ('children' in child && child.children) {
            return child.children.some(grandchild => 'href' in grandchild && pathname === grandchild.href)
          }
          return 'href' in child && pathname === child.href
        })
        if (isParentActive) {
          initialOpenMenus[`menu-${index}`] = true
          
          item.children.forEach((child, childIndex) => {
            if ('children' in child && child.children) {
              const isChildParentActive = child.children.some(grandchild => 'href' in grandchild && pathname === grandchild.href)
              if (isChildParentActive) {
                initialOpenSubMenus[`submenu-${index}-${childIndex}`] = true
              }
            }
          })
        }
      }
    })

    setOpenMenus(initialOpenMenus)
    setOpenSubMenus(initialOpenSubMenus)
  }, [pathname])

  const toggleMenu = (menuKey: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }))
  }

  const toggleSubMenu = (subMenuKey: string) => {
    setOpenSubMenus(prev => ({
      ...prev,
      [subMenuKey]: !prev[subMenuKey]
    }))
  }

  return (
    <aside className="layout_sidebar">
      <div className={styles.header}>
        <Link href="/" className={styles.logo_container}>
          <img src="/images/한평생그룹_default_black@2x.png" alt="logo" className={styles.logo_image} />
        </Link>
      </div>
      
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {menuItems.map((item, index) => {
            if ('children' in item && item.children) {
              const menuKey = `menu-${index}`
              const isOpen = openMenus[menuKey] ?? false
              const isParentActive = item.children.some(child => {
                if ('children' in child && child.children) {
                  return child.children.some(grandchild => 'href' in grandchild && pathname === grandchild.href)
                }
                return 'href' in child && pathname === child.href
              })
              // 메뉴가 열려있고 활성화된 자식이 있을 때만 파란색 표시
              const shouldShowActive = isOpen && isParentActive

              return (
                <li key={index} className={styles.navItem}>
                  <button
                    className={`${styles.navParent} ${styles.navParentButton} ${shouldShowActive ? styles.navParentActive : ''}`}
                    onClick={() => toggleMenu(menuKey)}
                  >
                    <a>{item.label}</a>
                    <svg
                      className={`${styles.chevron} ${isOpen ? styles.chevronOpen : styles.chevronClosed}`}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <ul className={`${styles.navSubList} ${isOpen ? styles.navSubListOpen : styles.navSubListClosed}`}>
                    {item.children.map((child, childIndex) => {
                      if ('children' in child && child.children) {
                        const isChildParentActive = child.children.some(grandchild => 'href' in grandchild && pathname === grandchild.href)
                        const subMenuKey = `submenu-${index}-${childIndex}`
                        const isSubOpen = openSubMenus[subMenuKey] ?? false
                        
                        return (
                          <li key={child.label} className={styles.navSubItem}>
                            <button
                              className={`${styles.navSubParent} ${styles.navSubParentButton} ${isChildParentActive && isSubOpen ? styles.navSubParentActive : ''}`}
                              onClick={() => toggleSubMenu(subMenuKey)}
                            >
                              <span>{child.label}</span>
                              <svg
                                className={`${styles.chevron} ${styles.chevronSmall} ${isSubOpen ? styles.chevronOpen : styles.chevronClosed}`}
                                width="14"
                                height="14"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </button>
                            <ul className={`${styles.navSubSubList} ${isSubOpen ? styles.navSubSubListOpen : styles.navSubSubListClosed}`}>
                              {child.children.map((grandchild) => {
                                if ('href' in grandchild) {
                                  const isActive = pathname === grandchild.href
                                  return (
                                    <li key={grandchild.href} className={styles.navSubSubItem}>
                                      <Link
                                        href={grandchild.href}
                                        className={`${styles.navLink} ${isActive ? styles.navLinkActive : styles.navLinkInactive}`}
                                      >
                                        {grandchild.label}
                                      </Link>
                                    </li>
                                  )
                                }
                                return null
                              })}
                            </ul>
                          </li>
                        )
                      } else if ('href' in child) {
                        const isActive = pathname === child.href
                        return (
                          <li key={child.href} className={styles.navSubItem}>
                            <Link
                              href={child.href}
                              className={`${styles.navLink} ${isActive ? styles.navLinkActive : styles.navLinkInactive}`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        )
                      }
                      return null
                    })}
                  </ul>
                </li>
              )
            } else if ('href' in item) {
              const isActive = pathname === item.href
              return (
                <li key={item.href} className={styles.navItem}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : styles.navLinkInactive}`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            }
            return null
          })}
        </ul>
      </nav>
    </aside>
  )
}
