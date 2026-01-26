import styles from "./responsive-design.module.css";
import CopyableCodeBlock from "../components/CopyableCodeBlock";

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
          프로젝트에서 사용하는 표준 브레이크포인트입니다. 화면 크기에 따라
          레이아웃을 조정할 때 이 값들을 사용하세요.
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
                <td>
                  <code>@media (min-width: 0px)</code>
                </td>
              </tr>
              <tr>
                <td>태블릿</td>
                <td>768px</td>
                <td>
                  <code>@media (min-width: 768px)</code>
                </td>
              </tr>
              <tr>
                <td>데스크탑</td>
                <td>1024px</td>
                <td>
                  <code>@media (min-width: 1024px)</code>
                </td>
              </tr>
              <tr>
                <td>큰 데스크탑</td>
                <td>1280px</td>
                <td>
                  <code>@media (min-width: 1280px)</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>
            CSS 미디어 쿼리 사용법
          </h3>
          <CopyableCodeBlock
            code={`// CSS Modules에서 미디어 쿼리 사용
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
}`}
          />
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
          <CopyableCodeBlock
            code={`// CSS Modules 방식
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
}`}
          />

          <p className={styles.exampleLabel}>
            실제 화면에서 보이는 모습 (축소/확대로 확인)
          </p>
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
          <CopyableCodeBlock
            code={`// CSS Modules 방식
.responsiveFlex {
  display: flex;
  flex-direction: column; /* 모바일: 세로 배치 */
  gap: 1rem;
}

@media (min-width: 768px) {
  .responsiveFlex {
    flex-direction: row; /* 태블릿 이상: 가로 배치 */
  }
}`}
          />
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>숨기기/보이기</h3>
          <p className={styles.text}>
            특정 화면 크기에서만 요소를 보이거나 숨길 수 있습니다.
          </p>
          <CopyableCodeBlock
            code={`// CSS Modules 방식
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
}`}
          />
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
          <CopyableCodeBlock
            code={`// CSS Modules 방식
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
}`}
          />
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
          <CopyableCodeBlock
            code={`// CSS Modules 방식
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
}`}
          />
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>마진 조정</h3>
          <CopyableCodeBlock
            code={`// CSS Modules 방식
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
}`}
          />
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
    </div>
  );
}
