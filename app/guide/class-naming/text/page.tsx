import styles from './text.module.css'
import CopyableCodeBlock from '../../components/CopyableCodeBlock'

export default function TextPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>텍스트 클래스</h1>
      <p className={styles.description}>
        <code>.text_</code> 접두사는 텍스트의 스타일을 정할 때 사용합니다.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>사용 방법</h2>
        <p className={styles.text}>
          <code>.text_</code> 접두사는 텍스트의 용도에 맞는 스타일을 적용할 때 사용합니다. 
          입력 필드 위의 라벨은 <code>.text_label</code>을 사용하고, 도움말은 input의 <code>placeholder</code> 속성을 사용합니다.
        </p>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>사용 예시</h3>
          
          <CopyableCodeBlock code={`// 라벨
<label className={styles.text_label}>이메일</label>
<input type="email" placeholder="example@email.com" />`} />

        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>각 클래스의 용도</h2>
        
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>.text_label</h3>
          <p className={styles.text}>
            입력 필드나 선택 옵션 위에 표시되는 라벨에 사용합니다. 
            폼 요소의 이름을 명확하게 표시할 때 사용하며, 작은 크기이지만 중간 굵기로 설정되어 있어 눈에 잘 띕니다.
          </p>
          <CopyableCodeBlock code={`<label className={styles.text_label}>비밀번호</label>
<input type="password" />`} />
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>플레이스홀더 (placeholder)</h3>
          <p className={styles.text}>
            입력 필드 안에 표시되는 힌트 텍스트로 사용합니다. 
            사용자가 어떤 값을 입력해야 하는지 안내하는 메시지를 input의 <code>placeholder</code> 속성으로 표시합니다.
          </p>
          <CopyableCodeBlock code={`<label className={styles.text_label}>비밀번호</label>
<input type="password" placeholder="8자 이상, 영문과 숫자를 포함해주세요" />`} />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>실제 사용 예시</h2>
        <p className={styles.text}>
          텍스트 클래스는 주로 폼 요소와 함께 사용됩니다. 아래는 실제 폼에서 사용하는 예시입니다.
        </p>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>폼 예시</h3>
          
          <CopyableCodeBlock code={`<form>
  <div className={styles.formField}>
    <label className={styles.text_label}>이름</label>
    <input type="text" className={styles.input} placeholder="홍길동" />
  </div>
  
  <div className={styles.formField}>
    <label className={styles.text_label}>이메일</label>
    <input type="email" className={styles.input} placeholder="example@email.com" />
  </div>
  
  <div className={styles.formField}>
    <label className={styles.text_label}>비밀번호</label>
    <input type="password" className={styles.input} placeholder="8자 이상 입력해주세요" />
  </div>
</form>`} />

          <p className={styles.exampleLabel}>실제 화면에서 보이는 모습</p>
          <div className={styles.exampleGroup}>
            <form className={styles.formExample}>
              <div className={styles.formField}>
                <label className={styles.text_label}>이름</label>
                <input type="text" className={styles.input} placeholder="홍길동" />
              </div>
              
              <div className={styles.formField}>
                <label className={styles.text_label}>이메일</label>
                <input type="email" className={styles.input} placeholder="example@email.com" />
              </div>
              
              <div className={styles.formField}>
                <label className={styles.text_label}>비밀번호</label>
                <input type="password" className={styles.input} placeholder="8자 이상 입력해주세요" />
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>자주 사용하는 텍스트 클래스</h2>
        <div className={styles.infoBox}>
          <h4 className={styles.infoBoxTitle}>텍스트 클래스 목록</h4>
          <ul className={styles.infoBoxList}>
            <li><code>.text_label</code> - 입력 필드나 선택 옵션의 라벨</li>
            <li><code>placeholder</code> - 입력 필드 안에 표시되는 힌트 텍스트</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>팁</h2>
        <div className="ui_tip">
          <p>
            <strong>💡 팁:</strong> 텍스트 클래스는 의미에 맞게 사용하는 것이 중요합니다. 
            폼의 라벨은 반드시 <code>.text_label</code>을 사용하고, 
            입력 필드의 힌트는 <code>placeholder</code> 속성을 사용하여 일관성을 유지하세요.
          </p>
        </div>
      </section>
    </div>
  )
}

