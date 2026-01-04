import styles from './layout.module.css'
import CopyableCodeBlock from '../../components/CopyableCodeBlock'

export default function LayoutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>레이아웃 클래스</h1>
      <p className={styles.description}>
        <code>.layout_</code> 접두사는 페이지의 전체 구조를 만드는 데 사용합니다.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>사용 방법</h2>
        <p className={styles.text}>
          <code>.layout_</code> 접두사는 페이지의 큰 틀을 잡을 때 사용합니다. 
          예를 들어 전체 페이지를 감싸는 컨테이너, 왼쪽에 있는 사이드바, 위쪽 헤더, 아래쪽 푸터 같은 것들에 사용합니다.
        </p>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>사용 예시</h3>
          
          <CopyableCodeBlock code={`<div className={styles.layout_wrapper}>
  <header className={styles.layout_header}>
    {/* 헤더 내용 */}
  </header>
  <main className={styles.layout_content}>
    <div className={styles.layout_container}>
      {/* 메인 콘텐츠 */}
    </div>
  </main>
  <footer className={styles.layout_footer}>
    {/* 푸터 내용 */}
  </footer>
</div>`} />

          <p className={styles.exampleLabel}>실제 화면에서 보이는 모습</p>
          <div className={styles.exampleGroup}>
            <div className={styles.layout_wrapper}>
              <header className={styles.layout_header}>
                <p className={styles.exampleText}>헤더 내용</p>
              </header>
              <main className={styles.layout_content}>
                <div className={styles.layout_container}>
                  <p className={styles.exampleText}>메인 콘텐츠</p>
                </div>
              </main>
              <footer className={styles.layout_footer}>
                <p className={styles.exampleText}>푸터 내용</p>
              </footer>
            </div>
          </div>

          <div className={styles.infoBox}>
            <h4 className={styles.infoBoxTitle}>자주 사용하는 레이아웃 클래스</h4>
            <ul className={styles.infoBoxList}>
              <li><code>.layout_wrapper</code> - 전체 페이지를 감싸는 최상위 컨테이너</li>
              <li><code>.layout_container</code> - 콘텐츠의 최대 너비를 제한하는 컨테이너</li>
              <li><code>.layout_sidebar</code> - 왼쪽 또는 오른쪽에 위치하는 사이드바</li>
              <li><code>.layout_content</code> - 메인 콘텐츠가 들어가는 영역</li>
              <li><code>.layout_header</code> - 페이지 상단에 위치하는 헤더</li>
              <li><code>.layout_footer</code> - 페이지 하단에 위치하는 푸터</li>
            </ul>
          </div>
        </div>

        <div className={styles.warning}>
          <p>
            <strong>⚠️ 주의:</strong> 레이아웃 클래스는 여러 페이지에서 공통으로 사용하는 구조에만 사용하세요. 
            특정 페이지에서만 쓰는 레이아웃은 별도의 클래스명을 만드는 것이 좋습니다.
          </p>
        </div>
      </section>
    </div>
  )
}

