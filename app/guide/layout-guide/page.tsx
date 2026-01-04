import styles from './layout-guide.module.css'
import CopyableCodeBlock from '../components/CopyableCodeBlock'

export default function LayoutGuidePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>레이아웃 가이드</h1>
      <p className={styles.description}>
        프로젝트에서 사용하는 레이아웃 크기와 여백 규격입니다. 
        디자인할 때 이 규격을 참고하면 일관된 레이아웃을 만들 수 있습니다.
      </p>

      <div className={styles.wrapper}>
        {/* Desktop */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Desktop</h2>
          <CopyableCodeBlock code={`.desktop {
  width: 1920px;
  height: 1080px;
  margin: 0 200px;
  border: 1px solid #b7b7b7;
  background-color: #ffffff;
  position: relative;
  box-sizing: border-box;
}`} />
        </section>

        {/* Desktop 2 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Desktop 2</h2>
          <CopyableCodeBlock code={`.desktop2 {
  width: 1920px;
  height: 1080px;
  margin: 0 330px;
  border: 1px solid #b7b7b7;
  background-color: #ffffff;
  position: relative;
  box-sizing: border-box;
}`} />
        </section>
      </div>
    </div>
  )
}

