import styles from './responsive-design.module.css'
import CopyableCodeBlock from '../components/CopyableCodeBlock'

export default function ResponsiveDesignPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>반응형 디자인 가이드</h1>
      <p className={styles.description}>
        다양한 화면 크기에 대응하는 반응형 디자인을 구현하는 방법을 안내합니다.
      </p>

      {/* 브레이크포인트 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>브레이크포인트</h2>
        <p className={styles.text}>
          프로젝트에서 사용하는 표준 브레이크포인트입니다. 화면 크기에 따라 레이아웃을 조정할 때 이 값들을 사용하세요.
        </p>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>표준 브레이크포인트</h3>
          <table className={styles.breakpointTable}>
            <thead>
              <tr>
                <th>디바이스</th>
                <th>최소 너비</th>
                <th>CSS 미디어 쿼리</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>모바일</td>
                <td>0px</td>
                <td><code>@media (min-width: 0px)</code></td>
              </tr>
              <tr>
                <td>태블릿</td>
                <td>768px</td>
                <td><code>@media (min-width: 768px)</code></td>
              </tr>
              <tr>
                <td>데스크탑</td>
                <td>1024px</td>
                <td><code>@media (min-width: 1024px)</code></td>
              </tr>
              <tr>
                <td>큰 데스크탑</td>
                <td>1280px</td>
                <td><code>@media (min-width: 1280px)</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>CSS 미디어 쿼리 사용법</h3>
          <CopyableCodeBlock code={`// CSS Modules에서 미디어 쿼리 사용
.responsiveCard {
  padding: 1rem;
}

@media (min-width: 768px) {
  .responsiveCard {
    padding: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .responsiveCard {
    padding: 2rem;
  }
}`} />
        </div>

      </section>

      {/* 레이아웃 패턴 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>반응형 레이아웃 패턴</h2>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>그리드 레이아웃</h3>
          <p className={styles.text}>
            화면 크기에 따라 열의 개수를 조정하는 그리드 레이아웃입니다.
          </p>
          <CopyableCodeBlock code={`// CSS Modules 방식
.responsiveGrid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr; /* 모바일: 1열 */
}

@media (min-width: 768px) {
  .responsiveGrid {
    grid-template-columns: repeat(2, 1fr); /* 태블릿: 2열 */
  }
}

@media (min-width: 1024px) {
  .responsiveGrid {
    grid-template-columns: repeat(3, 1fr); /* 데스크탑: 3열 */
  }
}`} />

          <p className={styles.exampleLabel}>실제 화면에서 보이는 모습 (축소/확대로 확인)</p>
          <div className={styles.exampleGroup}>
            <div className={styles.responsiveGrid}>
              <div className={styles.responsiveCard}>카드 1</div>
              <div className={styles.responsiveCard}>카드 2</div>
              <div className={styles.responsiveCard}>카드 3</div>
            </div>
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>플렉스 레이아웃</h3>
          <p className={styles.text}>
            플렉스박스를 사용한 반응형 레이아웃입니다.
          </p>
          <CopyableCodeBlock code={`// CSS Modules 방식
.responsiveFlex {
  display: flex;
  flex-direction: column; /* 모바일: 세로 배치 */
  gap: 1rem;
}

@media (min-width: 768px) {
  .responsiveFlex {
    flex-direction: row; /* 태블릿 이상: 가로 배치 */
  }
}`} />
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>숨기기/보이기</h3>
          <p className={styles.text}>
            특정 화면 크기에서만 요소를 보이거나 숨길 수 있습니다.
          </p>
          <CopyableCodeBlock code={`// CSS Modules 방식
.mobileOnly {
  display: block;
}

@media (min-width: 768px) {
  .mobileOnly {
    display: none; /* 태블릿 이상에서는 숨김 */
  }
}

.desktopOnly {
  display: none;
}

@media (min-width: 1024px) {
  .desktopOnly {
    display: block; /* 데스크탑에서만 보임 */
  }
}`} />
        </div>
      </section>

      {/* 타이포그래피 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>반응형 타이포그래피</h2>
        <p className={styles.text}>
          화면 크기에 따라 텍스트 크기를 조정하여 가독성을 향상시킵니다.
        </p>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>텍스트 크기 조정</h3>
          <CopyableCodeBlock code={`// CSS Modules 방식
.responsiveText {
  font-size: 0.875rem; /* 모바일: 14px */
}

@media (min-width: 768px) {
  .responsiveText {
    font-size: 1rem; /* 태블릿: 16px */
  }
}

@media (min-width: 1024px) {
  .responsiveText {
    font-size: 1.125rem; /* 데스크탑: 18px */
  }
}`} />
        </div>
      </section>

      {/* 간격 및 패딩 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>반응형 간격</h2>
        <p className={styles.text}>
          화면 크기에 따라 여백과 패딩을 조정합니다.
        </p>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>패딩 조정</h3>
          <CopyableCodeBlock code={`// CSS Modules 방식
.responsivePadding {
  padding: 0.75rem; /* 모바일 */
}

@media (min-width: 768px) {
  .responsivePadding {
    padding: 1rem; /* 태블릿 */
  }
}

@media (min-width: 1024px) {
  .responsivePadding {
    padding: 2rem; /* 데스크탑 */
  }
}`} />
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>마진 조정</h3>
          <CopyableCodeBlock code={`// CSS Modules 방식
.responsiveMargin {
  margin-top: 1rem; /* 모바일 */
}

@media (min-width: 768px) {
  .responsiveMargin {
    margin-top: 1.5rem; /* 태블릿 */
  }
}

@media (min-width: 1024px) {
  .responsiveMargin {
    margin-top: 2rem; /* 데스크탑 */
  }
}`} />
        </div>
      </section>

      {/* 모바일 최적화 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>모바일 최적화</h2>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>터치 친화적 UI</h3>
          <p className={styles.text}>
            모바일에서는 터치하기 쉬운 크기와 간격을 제공해야 합니다.
          </p>
          <ul className={styles.list}>
            <li>버튼과 클릭 가능한 요소는 최소 44px × 44px 크기로 만드세요</li>
            <li>터치 영역 간격은 최소 8px 이상 유지하세요</li>
            <li>스와이프 제스처를 고려한 레이아웃을 사용하세요</li>
          </ul>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>성능 최적화</h3>
          <ul className={styles.list}>
            <li>모바일에서는 불필요한 애니메이션을 줄이세요</li>
            <li>이미지는 적절한 크기로 최적화하세요</li>
            <li>지연 로딩(lazy loading)을 활용하세요</li>
          </ul>
        </div>
      </section>

      {/* 베스트 프랙티스 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>베스트 프랙티스</h2>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>모바일 우선 디자인</h3>
          <p className={styles.text}>
            모바일 우선(Mobile First) 방식으로 디자인하는 것을 권장합니다. 작은 화면부터 시작해서 점진적으로 큰 화면에 맞게 확장하는 방식입니다.
          </p>
          <CopyableCodeBlock code={`// 모바일 우선 방식 (권장)
.container {
  padding: 1rem; /* 모바일 기본값 */
}

@media (min-width: 768px) {
  .container {
    padding: 1.5rem; /* 태블릿 */
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 2rem; /* 데스크탑 */
  }
}

// 데스크탑 우선 방식 (비권장)
.container {
  padding: 2rem; /* 데스크탑 기본값 */
}

@media (max-width: 1023px) {
  .container {
    padding: 1.5rem; /* 태블릿 */
  }
}

@media (max-width: 767px) {
  .container {
    padding: 1rem; /* 모바일 */
  }
}`} />
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>테스트 방법</h3>
          <ul className={styles.list}>
            <li>브라우저 개발자 도구의 디바이스 모드로 다양한 화면 크기를 테스트하세요</li>
            <li>실제 디바이스에서 테스트하는 것이 가장 정확합니다</li>
            <li>가로/세로 모드를 모두 테스트하세요</li>
            <li>터치 인터랙션이 정상 작동하는지 확인하세요</li>
          </ul>
        </div>

        <div className={styles.infoBox}>
          <h4 className={styles.infoBoxTitle}>반응형 디자인 체크리스트</h4>
          <ul className={styles.infoBoxList}>
            <li>모든 주요 화면 크기(모바일, 태블릿, 데스크탑)에서 레이아웃이 정상적으로 표시되는가?</li>
            <li>텍스트가 읽기 쉬운 크기로 표시되는가?</li>
            <li>버튼과 클릭 가능한 요소가 충분히 큰가?</li>
            <li>이미지가 적절한 크기로 최적화되어 있는가?</li>
            <li>네비게이션이 모든 화면 크기에서 사용하기 편리한가?</li>
            <li>폼 입력 필드가 모바일에서 사용하기 편리한가?</li>
          </ul>
        </div>

        <div className={styles.tip}>
          <p>
            <strong>💡 팁:</strong> CSS Modules의 미디어 쿼리를 활용하여 반응형 디자인을 구현할 수 있습니다. 
            모바일 우선 방식으로 작성하면 코드가 더 깔끔하고 유지보수하기 쉽습니다.
          </p>
        </div>
      </section>
    </div>
  )
}

