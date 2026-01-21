import Link from 'next/link'
import styles from './overview.module.css'
import CopyableCodeBlock from '../../components/CopyableCodeBlock'

export default function CSSFoundationOverviewPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CSS 초기 세팅 가이드</h1>
      <p className={styles.description}>
        새 프로젝트를 시작할 때 필요한 CSS 기본 설정 방법을 안내합니다. 
        이 가이드를 따라하면 일관된 디자인을 쉽게 적용할 수 있습니다.
      </p>

      {/* CSS Modules 사용 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>CSS Modules 사용하기</h2>
        <p className={styles.text}>
          우리는 <strong>CSS Modules</strong>라는 방법을 사용해서 각 컴포넌트의 스타일을 따로 관리합니다. 
          컴포넌트 파일 이름이 <code>Button.tsx</code>라면, 스타일 파일은 <code>Button.module.css</code>로 만듭니다.
        </p>
        <CopyableCodeBlock code={`// Component.tsx
import styles from './Component.module.css'

export default function Component() {
  return <div className={styles.container}>내용</div>
}

// Component.module.css
.container {
  font-size: var(--font-body-1-size);
  line-height: var(--font-body-1-height);
  letter-spacing: var(--font-body-1-spacing);
}`} />
        <div style={{ backgroundColor: '#E5EDFF', padding: '1rem', borderRadius: '0.5rem', borderLeft: '4px solid #4C85FF', marginTop: '1rem' }}>
          <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: '1.6' }}>
            <strong>💡 팁:</strong> CSS Modules는 클래스명을 자동으로 변환해서 다른 컴포넌트와 스타일이 섞이지 않게 해줍니다. 
            모든 페이지에서 공통으로 쓰는 스타일은 <code>components.css</code>에, 특정 컴포넌트에서만 쓰는 스타일은 <code>.module.css</code>에 작성하세요.
          </p>
        </div>
      </section>

      {/* 개요 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>전체 구조</h2>
        <p className={styles.text}>
          CSS 파일은 다음 순서로 구성됩니다: 
          <strong>브라우저 리셋 → 디자인 토큰 → 기본 스타일 → 레이아웃 → 공통 컴포넌트</strong>
        </p>
        <CopyableCodeBlock code={`/styles
  ├── normalize.css
  ├── tokens.css
  ├── base.css
  ├── layout.css
  └── components.css`} />
      </section>

      {/* CSS 파일 목록 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>CSS 파일 목록</h2>
        <p className={styles.text}>
          아래 순서대로 각 CSS 파일을 확인하고 복사할 수 있습니다. 새 프로젝트를 시작할 때 이 파일들을 그대로 복사해서 사용하면 됩니다.
        </p>
        
        <div className={styles.fileList}>
          <Link href="/guide/css-foundation/normalize" className={styles.fileLink}>
            <span className={styles.fileNumber}>1</span>
            <div>
              <h3 className={styles.fileTitle}>normalize.css</h3>
              <p className={styles.fileDescription}>브라우저마다 다른 기본 스타일을 통일시켜주는 파일입니다.</p>
            </div>
          </Link>
          
          <Link href="/guide/css-foundation/tokens" className={styles.fileLink}>
            <span className={styles.fileNumber}>2</span>
            <div>
              <h3 className={styles.fileTitle}>tokens.css</h3>
              <p className={styles.fileDescription}>프로젝트 전체에서 사용하는 디자인 토큰(폰트 크기, 행간, 자간 등)을 정의합니다.</p>
            </div>
          </Link>
          
          <Link href="/guide/css-foundation/base" className={styles.fileLink}>
            <span className={styles.fileNumber}>3</span>
            <div>
              <h3 className={styles.fileTitle}>base.css</h3>
              <p className={styles.fileDescription}>HTML 요소들(제목, 본문, 링크, 버튼 등)의 기본 스타일을 정의합니다.</p>
            </div>
          </Link>
          
          <Link href="/guide/css-foundation/layout" className={styles.fileLink}>
            <span className={styles.fileNumber}>4</span>
            <div>
              <h3 className={styles.fileTitle}>layout.css(미완성)</h3>
              <p className={styles.fileDescription}>페이지의 레이아웃 구조를 만드는 클래스들을 정의합니다.</p>
            </div>
          </Link>
          
          <Link href="/guide/css-foundation/components" className={styles.fileLink}>
            <span className={styles.fileNumber}>5</span>
            <div>
              <h3 className={styles.fileTitle}>components.css(미완성)</h3>
              <p className={styles.fileDescription}>여러 페이지에서 공통으로 사용하는 컴포넌트 스타일을 정의합니다.</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
