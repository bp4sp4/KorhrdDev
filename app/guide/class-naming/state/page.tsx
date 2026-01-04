import styles from './state.module.css'
import CopyableCodeBlock from '../../components/CopyableCodeBlock'

export default function StatePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>상태 클래스</h1>
      <p className={styles.description}>
        <code>.is-</code> 접두사는 요소의 현재 상태를 나타낼 때 사용합니다.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>사용 방법</h2>
        <p className={styles.text}>
          <code>.is-</code> 접두사는 요소가 현재 어떤 상태인지 나타낼 때 사용합니다. 
          예를 들어 버튼이 활성화되어 있으면 <code>.is-active</code>, 비활성화되어 있으면 <code>.is-disabled</code>, 
          화면에서 숨겨져 있으면 <code>.is-hidden</code>을 사용합니다.
        </p>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>사용 예시</h3>
          
          <CopyableCodeBlock code={`<!-- 활성화 상태 -->
<button className="btn btn-primary is-active">활성화됨</button>

<!-- 비활성화 상태 -->
<button className="btn btn-primary is-disabled">비활성화</button>

<!-- 숨김 상태 -->
<div className="is-hidden">숨겨진 요소</div>

<!-- 조건부 적용 -->
<div className={\`ui-card \${isActive ? 'is-active' : ''}\`}>
  내용
</div>`} />

          <div className={styles.buttonGroup}>
            <button className="btn btn-primary is-active">Active</button>
            <button className="btn btn-primary is-disabled">Disabled</button>
          </div>
        </div>

        <div className={styles.tip}>
          <p>
            <strong>💡 팁:</strong> 상태 클래스는 JavaScript로 사용자가 뭔가를 했을 때 추가하거나 제거합니다. 
            CSS의 <code>:hover</code> (마우스 올렸을 때), <code>:active</code> (클릭했을 때) 같은 것과 함께 쓰면 더 다양한 효과를 만들 수 있습니다.
          </p>
        </div>
      </section>
    </div>
  )
}

