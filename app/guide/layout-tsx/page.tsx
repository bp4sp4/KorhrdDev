import styles from './layout-tsx.module.css'
import CopyableCodeBlock from '../components/CopyableCodeBlock'

export default function LayoutTsxPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>layout.tsx 가이드</h1>
      <p className={styles.description}>
        Next.js App Router에서 사용하는 루트 레이아웃 파일입니다. 
        모든 페이지에 공통으로 적용되는 HTML 구조와 메타데이터를 정의합니다.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>기본 구조</h2>
        <p className={styles.text}>
          <code>app/layout.tsx</code> 파일은 Next.js App Router의 루트 레이아웃입니다. 
          이 파일에서 전체 페이지의 기본 구조와 메타데이터를 설정합니다.
        </p>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>사용 예시</h3>
          
          <CopyableCodeBlock code={`import type { Metadata } from "next";
import "../styles/base.css";
import "../styles/components.css";

export const metadata: Metadata = {
  title: "한평생 개발본부",
  description: "한평생 개발본부 - 개발&디자인 가이드",
  openGraph: {
    title: "한평생 개발본부",
    description: "한평생 개발본부 - 개발&디자인 가이드",
    images: [
      {
        url: "/graph_img.png",
        width: 1200,
        height: 630,
        alt: "한평생 개발본부",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "한평생 개발본부",
    description: "한평생 개발본부 - 개발&디자인 가이드",
    images: ["/graph_img.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}`} />

          <div className={styles.tip}>
            <p>
              <strong>💡 팁:</strong> <code>layout.tsx</code>는 모든 페이지에 공통으로 적용되므로, 
              여기에 헤더나 푸터 같은 공통 컴포넌트를 넣으면 모든 페이지에서 자동으로 표시됩니다.
            </p>
          </div>
        </div>
      </section>



      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>주요 구성 요소</h2>
        <div className={styles.infoBox}>
          <h4 className={styles.infoBoxTitle}>layout.tsx의 주요 역할</h4>
          <ul className={styles.infoBoxList}>
            <li><code>metadata</code> - 페이지의 메타데이터 (제목, 설명, OG 이미지 등)</li>
            <li><code>RootLayout</code> - 전체 페이지의 루트 구조를 정의</li>
            <li><code>children</code> - 각 페이지의 내용이 들어가는 부분</li>
            <li>전역 스타일 - <code>base.css</code>, <code>components.css</code> 같은 전역 CSS 파일 import</li>
            <li>폰트 설정 - Google Fonts나 로컬 폰트 설정</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

