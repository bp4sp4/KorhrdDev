import Image from 'next/image'
import styles from './image-icon-guide.module.css'
import CopyableCodeBlock from '../components/CopyableCodeBlock'

export default function ImageIconGuidePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>이미지 & 아이콘 가이드</h1>
      <p className={styles.description}>
        Next.js 프로젝트에서 이미지와 아이콘을 효율적으로 사용하는 방법을 안내합니다.
        최적화된 이미지 사용으로 성능을 개선하고 일관된 디자인을 유지할 수 있습니다.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Next.js Image 컴포넌트 사용법</h2>
        <p className={styles.text}>
          Next.js의 <code>Image</code> 컴포넌트를 사용하면 이미지가 자동으로 최적화되어 
          성능이 향상됩니다. 반드시 <code>next/image</code>에서 import해서 사용하세요.
        </p>

        <div className={styles.exampleCard}>
          <h3 className={styles.exampleTitle}>기본 사용법</h3>
          <CopyableCodeBlock code={`import Image from 'next/image'

export default function MyComponent() {
  return (
    <Image
      src="/images/logo.png"
      alt="로고"
      width={200}
      height={50}
    />
  )
}`} />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>이미지 최적화 방법</h2>
        
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>1. 이미지 포맷 선택</h3>
          <div className={styles.formatGrid}>
            <div className={styles.formatCard}>
              <h4 className={styles.formatTitle}>WebP</h4>
              <p className={styles.formatDescription}>
                최신 브라우저에서 지원하는 최적의 포맷입니다. 
                JPEG보다 25-35% 작고, PNG보다 훨씬 작습니다.
              </p>
              <p className={styles.formatUseCase}>
                <strong>사용 시나리오:</strong> 사진, 복잡한 이미지
              </p>
            </div>
            <div className={styles.formatCard}>
              <h4 className={styles.formatTitle}>AVIF</h4>
              <p className={styles.formatDescription}>
                WebP보다 더 작은 파일 크기를 제공합니다. 
                최신 브라우저에서만 지원됩니다.
              </p>
              <p className={styles.formatUseCase}>
                <strong>사용 시나리오:</strong> 고품질 사진 (fallback 필요)
              </p>
            </div>
            <div className={styles.formatCard}>
              <h4 className={styles.formatTitle}>JPEG</h4>
              <p className={styles.formatDescription}>
                널리 지원되는 포맷입니다. 
                사진에 적합하지만 투명도는 지원하지 않습니다.
              </p>
              <p className={styles.formatUseCase}>
                <strong>사용 시나리오:</strong> 사진, 복잡한 이미지
              </p>
            </div>
            <div className={styles.formatCard}>
              <h4 className={styles.formatTitle}>PNG</h4>
              <p className={styles.formatDescription}>
                투명도를 지원하는 무손실 포맷입니다. 
                파일 크기가 큽니다.
              </p>
              <p className={styles.formatUseCase}>
                <strong>사용 시나리오:</strong> 로고, 아이콘, 투명 배경 필요
              </p>
            </div>
            <div className={styles.formatCard}>
              <h4 className={styles.formatTitle}>SVG</h4>
              <p className={styles.formatDescription}>
                벡터 기반 포맷으로 확대해도 깨지지 않습니다. 
                파일 크기가 작고 CSS로 스타일링 가능합니다.
              </p>
              <p className={styles.formatUseCase}>
                <strong>사용 시나리오:</strong> 아이콘, 로고, 단순한 그래픽
              </p>
            </div>
          </div>
        </div>

 

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>2. Lazy Loading</h3>
          <CopyableCodeBlock code={`// 기본적으로 모든 이미지는 lazy loading됩니다
<Image
  src="/images/product.jpg"
  width={800}
  height={600}
  loading="lazy" // 기본값
/>

// 중요한 이미지는 즉시 로드
<Image
  src="/images/hero.jpg"
  width={1200}
  height={600}
  priority={true} // 즉시 로드
/>`} />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>SVG 아이콘 사용법</h2>
        
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>1. SVG를 컴포넌트로 사용</h3>
          <CopyableCodeBlock code={`// components/icons/CheckIcon.tsx
interface CheckIconProps {
  className?: string
  size?: number
}

export default function CheckIcon({ className, size = 24 }: CheckIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 6L9 17L4 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// 사용 예시
import CheckIcon from '@/components/icons/CheckIcon'

export default function MyComponent() {
  return (
    <button>
      <CheckIcon size={20} className="text-blue-500" />
      확인
    </button>
  )
}`} />
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>2. SVG를 이미지로 사용</h3>
          <CopyableCodeBlock code={`import Image from 'next/image'

export default function IconImage() {
  return (
    <Image
      src="/icons/check.svg"
      alt="체크 아이콘"
      width={24}
      height={24}
    />
  )
}`} />
        </div>


        <div className={styles.tipBox}>
          <h3 className={styles.tipTitle}>💡 SVG 사용 팁</h3>
          <ul className={styles.tipList}>
            <li>아이콘은 컴포넌트로 만들어 재사용성을 높이세요</li>
            <li><code>currentColor</code>를 사용하면 부모의 색상을 상속받습니다</li>
            <li><code>viewBox</code>를 설정하면 크기 조절이 자유롭습니다</li>
            <li>복잡한 SVG는 파일로 분리하고, 단순한 것은 인라인으로 사용하세요</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>이미지 포맷 선택 가이드</h2>
        
        <div className={styles.decisionTable}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>이미지 유형</th>
                <th>권장 포맷</th>
                <th>대체 포맷</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>사진</td>
                <td>WebP</td>
                <td>JPEG</td>
                <td>고품질 사진에 최적화</td>
              </tr>
              <tr>
                <td>로고</td>
                <td>SVG</td>
                <td>PNG</td>
                <td>확대해도 깨지지 않음</td>
              </tr>
              <tr>
                <td>아이콘</td>
                <td>SVG</td>
                <td>PNG</td>
                <td>작은 크기, 스타일링 가능</td>
              </tr>
              <tr>
                <td>일러스트</td>
                <td>SVG</td>
                <td>PNG</td>
                <td>벡터 기반 그래픽</td>
              </tr>
              <tr>
                <td>투명 배경 이미지</td>
                <td>PNG</td>
                <td>SVG</td>
                <td>투명도 지원 필요</td>
              </tr>
              <tr>
                <td>복잡한 그래픽</td>
                <td>WebP</td>
                <td>PNG</td>
                <td>고품질 유지하면서 파일 크기 최소화</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>주의사항</h2>
        <div className={styles.warningBox}>
          <ul className={styles.warningList}>
            <li>❌ 일반 <code>&lt;img&gt;</code> 태그 사용 금지 (Next.js Image 사용)</li>
            <li>❌ 너무 큰 이미지 파일 사용 금지 (최적화된 크기 사용)</li>
            <li>❌ 외부 이미지 사용 시 <code>next.config.js</code>에 도메인 추가 필요</li>
            <li>✅ 모든 이미지에 <code>alt</code> 속성 필수 (접근성)</li>
            <li>✅ LCP 이미지는 <code>priority</code> 속성 사용</li>
            <li>✅ 반응형 이미지는 <code>sizes</code> 속성 사용</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
