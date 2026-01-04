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
          예를 들어 작은 설명 글은 <code>.text_caption</code>, 입력 필드 위의 라벨은 <code>.text_label</code>, 도움말 텍스트는 <code>.text_helper</code>를 사용합니다.
        </p>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>사용 예시</h3>
          
          <CopyableCodeBlock code={`// 라벨
<label className={styles.text_label}>이메일</label>

// 캡션
<p className={styles.text_caption}>2024년 1월 1일</p>

// 헬퍼 텍스트
<p className={styles.text_helper}>8자 이상 입력해주세요</p>`} />

          <p className={styles.exampleLabel}>실제 화면에서 보이는 모습</p>
          <div className={styles.exampleGroup}>
            <div>
              <label className={styles.text_label}>이메일 주소</label>
              <p className={styles.text_helper}>올바른 이메일 형식을 입력해주세요</p>
            </div>
            <p className={styles.text_caption}>마지막 수정: 2024년 1월 1일</p>
          </div>
        </div>
      </section>
    </div>
  )
}

