import styles from './overview.module.css'
import CopyableCodeBlock from '../../components/CopyableCodeBlock'

export default function ClassNamingOverviewPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>클래스명 가이드</h1>
      <p className={styles.description}>
        프로젝트에서 사용하는 클래스명 규칙을 정리했습니다. 같은 규칙을 따르면 코드를 읽고 수정하기가 훨씬 쉬워집니다.
      </p>

      {/* 개요 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>개요</h2>
        <p className={styles.text}>
          우리는 <strong>BEM 방법론을 참고하되, 너무 복잡하지 않게 단순화한 규칙</strong>을 사용합니다. 
          클래스명만 봐도 어떤 역할을 하는지 바로 알 수 있도록 만드는 것이 목표입니다.
        </p>
        <p className={styles.textNoMargin}>
          모든 클래스명은 <strong>소문자와 하이픈(-)</strong>만 사용합니다. 
          클래스명 앞에 붙는 접두사(prefix)로 역할을 구분합니다.
        </p>
      </section>

      {/* 기본 규칙 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>기본 규칙</h2>
        
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>1. 접두사(Prefix) 규칙</h3>
          <p className={styles.text}>
            클래스명 맨 앞에 붙는 접두사로 요소의 역할을 구분합니다. 
            예를 들어 레이아웃은 <code>.layout-</code>, 버튼은 <code>.btn-</code>으로 시작합니다.
          </p>
          
          <CopyableCodeBlock code={`/* 레이아웃 관련 */
.layout-container
.layout-sidebar
.layout-content

/* UI 컴포넌트 */
.ui-card
.ui-modal
.ui-button

/* 버튼 */
.btn-primary
.btn-secondary
.btn-ghost

/* 텍스트 스타일 */
.text-caption
.text-label
.text-helper`} />
          
          <div className={styles.tip}>
            <p>
              <strong>💡 팁:</strong> 접두사를 사용하면 클래스명만 봐도 "아, 이건 레이아웃이구나", "이건 버튼이구나"라고 바로 알 수 있어서 코드를 읽기가 쉬워집니다.
            </p>
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>2. BEM 표기법</h3>
          <p className={styles.text}>
            BEM은 Block, Element, Modifier의 약자로, CSS 클래스명을 체계적으로 짓는 방법입니다. 
            표준 BEM은 <code>__</code> (더블 언더스코어)와 <code>--</code> (더블 하이픈)를 사용하지만, 
            우리는 <strong>하이픈(-) 하나만 사용</strong>합니다.
          </p>
          
          <CopyableCodeBlock code={`/* 표준 BEM 방식 */
.block__element--modifier

/* 우리 팀의 단순화된 방식 */
.block-element-modifier`} />

          <div className={styles.tip}>
            <p>
              <strong>💡 팁:</strong> 하이픈만 사용하면 키보드 입력이 빠르고, 대부분의 코드 에디터에서 자동완성이 더 잘 작동합니다.
            </p>
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>3. 네이밍 규칙</h3>
          <ul className={styles.list}>
            <li>소문자와 하이픈(-)만 사용합니다</li>
            <li>의미 있는 단어를 사용합니다 (약어는 피하세요)</li>
            <li>클래스명은 최대 3단계까지만 중첩합니다</li>
            <li>상태를 나타낼 때는 <code>.is-</code> 접두사를 사용합니다</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

