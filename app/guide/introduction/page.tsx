import styles from './introduction.module.css'
import CopyableCodeBlock from '../components/CopyableCodeBlock'

export default function IntroductionPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>프론트엔드 개발 가이드</h1>
      <p className={styles.description}>
        회사 프론트엔드 개발 표준 및 베스트 프랙티스를 안내하는 가이드입니다.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>가이드를 만든 이유</h2>
        <p className={styles.text}>
          웹사이트를 만들 때마다 "이 클래스 이름을 어떻게 지을까?", "어떤 스타일을 사용해야 할까?" 같은 고민을 하게 됩니다.
          이런 고민을 줄이고, 누구나 쉽게 따라할 수 있는 <strong>표준 가이드</strong>를 만들었습니다.
        </p>
        <p className={styles.text}>
        개발 가이드를 따르면:
        </p>
        <ul className={styles.list}>
          <li>코드를 작성할 때 매번 고민하지 않아도 됩니다</li>
          <li>다른 사람이 작성한 코드도 쉽게 이해할 수 있습니다</li>
          <li>프로젝트 전체의 스타일이 일관되게 유지됩니다</li>
          <li>처음 시작하는 사람도 빠르게 적응할 수 있습니다</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>개발 가이드의 장점</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>쉽게 시작할 수 있어요</h3>
            <p className={styles.cardText}>
              복사해서 바로 사용할 수 있는 코드 예제가 있어서
              처음 시작하는 사람도 쉽게 따라할 수 있습니다.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>빠르게 개발할 수 있어요</h3>
            <p className={styles.cardText}>
              매번 고민하지 않고 가이드를 보면서 빠르게 코드를 작성할 수 있습니다.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>일관된 스타일</h3>
            <p className={styles.cardText}>
              모든 페이지에서 같은 스타일을 사용해서
              웹사이트 전체가 통일감 있게 보입니다.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>이해하기 쉬워요</h3>
            <p className={styles.cardText}>
              누가 작성했는지와 관계없이 코드를 쉽게 이해하고
              수정할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>어떻게 사용하나요?</h2>
        <ol className={styles.orderedList}>
          <li>
            <strong>새 프로젝트를 시작할 때</strong>
            <p className={styles.text}>
              왼쪽 메뉴의 "기본 파일 구조"와 "CSS 초기 세팅"을 보고 필요한 파일들을 복사해서 사용하세요.
            </p>
            <CopyableCodeBlock code={`// 예시: 기본 레이아웃 구조
<div className={styles.layout_wrapper}>
  <aside className={styles.layout_sidebar}>
    {/* 사이드바 */}
  </aside>
  <main className={styles.layout_content}>
    {/* 메인 콘텐츠 */}
  </main>
</div>`} />
          </li>
          <li>
            <strong>클래스 이름을 지을 때</strong>
            <p className={styles.text}>
              "클래스명 가이드"를 참고해서 일관된 이름을 사용하세요.
            </p>
          </li>
          <li>
            <strong>스타일을 적용할 때</strong>
            <p className={styles.text}>
              "CSS 초기 세팅"에 있는 Typography, Spacing 등을 복사해서 사용하세요.
            </p>
          </li>
          <li>
            <strong>로고나 레이아웃이 필요할 때</strong>
            <p className={styles.text}>
              "로고 가이드"와 "레이아웃 가이드"를 참고하세요.
            </p>
          </li>
        </ol>
      </section>



      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>알아두면 좋은 점</h2>
        <div style={{ backgroundColor: '#E5EDFF', padding: '1rem', borderRadius: '0.5rem', borderLeft: '4px solid #4C85FF', marginTop: '1rem' }}>
          <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: '1.6', color: '#111827' }}>
            <strong>💡 팁:</strong> 모든 코드 예제는 복사 버튼을 클릭하면 바로 복사할 수 있습니다.
            가이드를 보면서 필요한 부분을 복사해서 프로젝트에 바로 사용하세요!
          </p>
        </div>
      </section>
    </div>
  )
}

