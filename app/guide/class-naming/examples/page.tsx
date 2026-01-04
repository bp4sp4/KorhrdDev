import styles from './examples.module.css'
import CopyableCodeBlock from '../../components/CopyableCodeBlock'

export default function ExamplesPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>잘못된 예 / 올바른 예</h1>
      <p className={styles.description}>
        클래스명을 잘못 짓는 경우와 올바르게 짓는 경우를 비교해봅니다. 
        이 예시를 보면 어떤 식으로 클래스명을 지어야 하는지 쉽게 이해할 수 있습니다.
      </p>

      <section className={styles.section}>
        <div className={styles.subsection}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', color: '#ef4444' }}>❌ 잘못된 예</h3>
          
          <div style={{  padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
            <CopyableCodeBlock code={`<!-- 의미 없는 클래스명 -->
<div className="box">내용</div>
<div className="red-button">버튼</div>

<!-- 과도한 중첩 -->
<div className="card-header-title-text">제목</div>

<!-- 일관성 없는 네이밍 -->
<button className="primaryBtn">저장</button>
<button className="btn_secondary">취소</button>

<!-- 약어 남용 -->
<div className="usr-prof-card">프로필</div>`} />
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', color: '#10b981' }}>✅ 올바른 예</h3>
          
          <div style={{  padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
            <CopyableCodeBlock code={`// 의미 있는 클래스명
<div className={styles.ui_card}>내용</div>
<button className={\`\${styles.btn} \${styles.btn_primary}\`}>버튼</button>

// 적절한 깊이
<div className={styles.ui_card}>
  <h3 className={styles.ui_card_title}>제목</h3>
</div>

// 일관된 네이밍
<button className={\`\${styles.btn} \${styles.btn_primary}\`}>저장</button>
<button className={\`\${styles.btn} \${styles.btn_secondary}\`}>취소</button>

// 명확한 의미
<div className={styles.ui_card}>
  <div className={styles.user_profile}>프로필</div>
</div>`} />
          </div>
        </div>
      </section>
    </div>
  )
}

