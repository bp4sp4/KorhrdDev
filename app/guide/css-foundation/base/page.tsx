import styles from './base.module.css'
import CopyableCodeBlock from '../../components/CopyableCodeBlock'

export default function BasePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>base.css</h1>
      <p className={styles.description}>
        HTML 요소들(제목, 본문, 링크, 버튼 등)의 기본 스타일을 정의하는 파일입니다. 
        normalize.css와 tokens.css를 먼저 불러온 후 기본 스타일을 적용합니다.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>파일 내용</h2>
        <p className={styles.text}>
          아래 코드를 복사해서 <code>styles/base.css</code> 파일로 저장하세요.
        </p>
        <CopyableCodeBlock code={`/**
 * Base Styles
 * 기본 스타일 및 리셋
 */

@import './normalize.css';
@import './tokens.css';

/* ============================================
   Root & Body
   ============================================ */

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  color: var(--color-text-primary);
  background-color: var(--color-bg-primary);
}

/* ============================================
   Typography
   ============================================ */

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-text-primary);
}

h1 {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
}

h2 {
  font-size: var(--font-size-3xl);
}

h3 {
  font-size: var(--font-size-2xl);
}

h4 {
  font-size: var(--font-size-xl);
}

h5 {
  font-size: var(--font-size-lg);
}

h6 {
  font-size: var(--font-size-base);
}

p {
  margin: 0;
  line-height: var(--line-height-relaxed);
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-primary-hover);
}

a:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* ============================================
   Lists
   ============================================ */

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

/* ============================================
   Images
   ============================================ */

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* ============================================
   Code
   ============================================ */

code {
  font-family: var(--font-family-mono);
  font-size: 0.875em;
  background-color: var(--color-gray-100);
  padding: 0.125rem 0.375rem;
  border-radius: var(--radius-sm);
  color: var(--color-error);
}

pre {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  background-color: var(--color-gray-900);
  color: var(--color-gray-100);
  padding: var(--spacing-4);
  border-radius: var(--radius-base);
  overflow-x: auto;
}

pre code {
  background-color: transparent;
  padding: 0;
  color: inherit;
}

/* ============================================
   Buttons (Base Reset)
   ============================================ */

button {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

/* ============================================
   Inputs (Base Reset)
   ============================================ */

input,
textarea,
select {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
}

input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* ============================================
   Scrollbar
   ============================================ */

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-gray-100);
}

::-webkit-scrollbar-thumb {
  background: var(--color-gray-300);
  border-radius: var(--radius-full);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-gray-400);
}

/* ============================================
   Selection
   ============================================ */

::selection {
  background-color: var(--color-primary-light);
  color: var(--color-primary-900);
}`} />
      </section>
    </div>
  )
}

