import styles from './tokens.module.css'
import CopyableCodeBlock from '../../components/CopyableCodeBlock'

export default function TokensPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>tokens.css</h1>
      <p className={styles.description}>
        프로젝트 전체에서 사용하는 디자인 토큰(폰트 크기, 행간, 자간 등)을 정의하는 파일입니다. 
        나중에 색상이나 간격 같은 다른 토큰도 여기에 추가할 수 있습니다.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>파일 내용</h2>
        <p className={styles.text}>
          아래 코드를 복사해서 <code>styles/tokens.css</code> 파일로 저장하세요.
        </p>
        <CopyableCodeBlock code={`/**
 * Design Tokens
 * 타이포그래피 토큰
 */

/* ============================================
   Pretendard Font Face
   ============================================ */

@font-face {
  font-family: "Pretendard";
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  src: url("/fonts/Pretendard-Regular.woff2") format("woff2");
}

@font-face {
  font-family: "Pretendard";
  font-weight: 500;
  font-style: normal;
  font-display: swap;
  src: url("/fonts/Pretendard-Medium.woff2") format("woff2");
}

@font-face {
  font-family: "Pretendard";
  font-weight: 600;
  font-style: normal;
  font-display: swap;
  src: url("/fonts/Pretendard-SemiBold.woff2") format("woff2");
}

@font-face {
  font-family: "Pretendard";
  font-weight: 700;
  font-style: normal;
  font-display: swap;
  src: url("/fonts/Pretendard-Bold.woff2") format("woff2");
}

:root {
  /* ============================================
     Typography
     ============================================ */
  
  /* Font Family */
  --font-family-base: "Pretendard", sans-serif;
  --font-family-mono: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono",
    Consolas, "Courier New", monospace;
  
  /* Display */
  --font-display-1-size: 4.5rem; /* 72px */
  --font-display-1-height: 6.3rem; /* 100.8px (140%) */
  --font-display-1-weight: 700;

  --font-display-2-size: 4rem; /* 64px */
  --font-display-2-height: 5.6rem; /* 89.6px (140%) */
  --font-display-2-weight: 700;
  
  /* Title */
  --font-title-1-size: 1.75rem; /* 28px */
  --font-title-1-height: 2.1rem; /* 33.6px (120%) */
  --font-title-1-weight: 600;

  --font-title-2-size: 1.5rem; /* 24px */
  --font-title-2-height: 1.8rem; /* 28.8px (120%) */
  --font-title-2-weight: 600;

  --font-title-3-size: 1.125rem; /* 18px */
  --font-title-3-height: 1.35rem; /* 21.6px (120%) */
  --font-title-3-weight: 600;

  /* Headline */
  --font-headline-1-size: 2.625rem; /* 42px */
  --font-headline-1-height: 3.15rem; /* 50.4px (120%) */
  --font-headline-1-weight: 700;

  --font-headline-2-size: 2.25rem; /* 36px */
  --font-headline-2-height: 2.7rem; /* 43.2px (120%) */
  --font-headline-2-weight: 700;

  --font-headline-3-size: 1.75rem; /* 28px */
  --font-headline-3-height: 2.1rem; /* 33.6px (120%) */
  --font-headline-3-weight: 700;
  
  /* Body */
  --font-body-1-size: 1.125rem; /* 18px */
  --font-body-1-height: 1.35rem; /* 21.6px (120%) */
  --font-body-1-reading-height: 1.575rem; /* 25.2px (140%) */
  --font-body-1-weight: 400;

  --font-body-2-size: 1rem; /* 16px */
  --font-body-2-height: 1.2rem; /* 19.2px (120%) */
  --font-body-2-reading-height: 1.4rem; /* 22.4px (140%) */
  --font-body-2-weight: 400;

  /* Label */
  --font-label-1-size: 0.875rem; /* 14px */
  --font-label-1-height: normal; /* normal */
  --font-label-1-reading-height: normal; /* normal */
  --font-label-1-weight: 600;

  --font-label-2-size: 0.75rem; /* 12px */
  --font-label-2-height: normal; /* normal */
  --font-label-2-weight: 700;
  
  /* Legacy Font Size (호환성) */
  --font-size-xs: var(--font-label-2-size);
  --font-size-sm: var(--font-label-1-size);
  --font-size-base: var(--font-body-1-size);
  --font-size-lg: var(--font-headline-1-size);
  --font-size-xl: var(--font-title-3-size);
  --font-size-2xl: var(--font-title-2-size);
  --font-size-3xl: var(--font-title-1-size);
  --font-size-4xl: var(--font-display-2-size);
  --font-size-5xl: var(--font-display-1-size);
  
  /* Legacy Line Height (호환성) */
  --line-height-tight: 1.25;
  --line-height-snug: 1.375;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
  --line-height-loose: 2;
  
  /* Font Weight */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* ============================================
     Colors
     ============================================ */

  /* Primary Color */
  --color-primary: #0051ff;

  /* Blue Palette */
  --Blue-50: #E5EDFF;
  --Blue-100: #B2CAFF;
  --Blue-200: #7FA8FF;
  --Blue-300: #4C85FF;
  --Blue-400: #2469FF;
  --Blue-500: #0051FF;
  --Blue-600: #0049E5;
  --Blue-700: #0039B2;
  --Blue-800: #002980;
  --Blue-900: #00184D;

  /* Green Palette */
  --Green-50: #E6FFEC;
  --Green-100: #C4FFD5;
  --Green-200: #95FFB6;
  --Green-300: #4EFF92;
  --Green-400: #2AF678;
  --Green-500: #095633;
  --Green-600: #00E961;
  --Green-700: #00C257;
  --Green-800: #009146;
  --Green-900: #002E19;

  /* Gray Palette */
  --Gray-50: #FAFAFA;
  --Gray-100: #F2F2F2;
  --Gray-200: #E4E4E4;
  --Gray-300: #D0D0D0;
  --Gray-400: #B2B2B2;
  --Gray-500: #919191;
  --Gray-600: #656565;
  --Gray-700: #3D3D3D;
  --Gray-800: #1D1D1D;
  --Gray-900: #010101;
}`} />
      </section>
    </div>
  )
}



