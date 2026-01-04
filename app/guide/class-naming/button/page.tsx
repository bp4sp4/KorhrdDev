import styles from './button.module.css'
import CopyableCodeBlock from '../../components/CopyableCodeBlock'

export default function ButtonPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>버튼 클래스</h1>
      <p className={styles.description}>
        <code>.btn_</code> 접두사는 버튼의 스타일을 정할 때 사용합니다.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>사용 방법</h2>
        <p className={styles.text}>
          <code>.btn_</code> 접두사는 버튼의 종류를 구분할 때 사용합니다. 
          먼저 기본 <code>.btn</code> 클래스를 붙이고, 그 다음에 <code>.btn_primary</code>, <code>.btn_secondary</code> 같은 변형 클래스를 함께 사용합니다.
        </p>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>사용 예시</h3>
          
          <CopyableCodeBlock code={`// Primary 버튼
<button className={\`\${styles.btn} \${styles.btn_primary}\`}>저장하기</button>

// Secondary 버튼
<button className={\`\${styles.btn} \${styles.btn_secondary}\`}>취소</button>

// Ghost 버튼
<button className={\`\${styles.btn} \${styles.btn_ghost}\`}>더보기</button>

// 크기 변형
<button className={\`\${styles.btn} \${styles.btn_primary} \${styles.btn_sm}\`}>작은 버튼</button>
<button className={\`\${styles.btn} \${styles.btn_primary} \${styles.btn_lg}\`}>큰 버튼</button>`} />

          <p className={styles.exampleLabel}>실제 화면에서 보이는 모습</p>
          <div className={styles.buttonGroup}>
            <button className={`${styles.btn} ${styles.btn_primary}`}>Primary</button>
            <button className={`${styles.btn} ${styles.btn_secondary}`}>Secondary</button>
            <button className={`${styles.btn} ${styles.btn_ghost}`}>Ghost</button>
            <button className={`${styles.btn} ${styles.btn_primary} ${styles.btn_sm}`}>Small</button>
            <button className={`${styles.btn} ${styles.btn_primary} ${styles.btn_lg}`}>Large</button>
          </div>
        </div>
      </section>
    </div>
  )
}

