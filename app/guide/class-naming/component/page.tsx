import styles from './component.module.css'
import CopyableCodeBlock from '../../components/CopyableCodeBlock'

export default function ComponentPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>컴포넌트 클래스</h1>
      <p className={styles.description}>
        <code>.ui-</code> 접두사는 여러 곳에서 재사용할 수 있는 UI 컴포넌트에 사용합니다.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>사용 방법</h2>
        <p className={styles.text}>
          <code>.ui-</code> 접두사는 여러 페이지에서 반복해서 사용하는 UI 요소에 붙입니다. 
          예를 들어 카드, 모달 창, 드롭다운 메뉴처럼 어디서든 쓸 수 있는 컴포넌트에 사용합니다.
        </p>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>사용 예시</h3>
          
          <CopyableCodeBlock code={`<!-- 카드 컴포넌트 -->
<div className="ui-card">
  <h3>카드 제목</h3>
  <p>카드 내용</p>
</div>

<!-- 모달 컴포넌트 -->
<div className="ui-modal">
  <div className="ui-modal-backdrop"></div>
  <div className="ui-modal-content">
    {/* 모달 내용 */}
  </div>
</div>`} />

          <div style={{ backgroundColor: '#111827', color: '#f3f4f6', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h4 style={{ marginBottom: '0.75rem', fontSize: '1rem' }}>자주 사용하는 UI 컴포넌트 클래스</h4>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: '1.75', fontSize: '0.875rem' }}>
              <li><code>.ui-card</code> - 카드 형태의 컨테이너</li>
              <li><code>.ui-modal</code> - 팝업 창을 감싸는 컨테이너</li>
              <li><code>.ui-modal-backdrop</code> - 모달 뒤에 깔리는 어두운 배경</li>
              <li><code>.ui-modal-content</code> - 모달 안에 들어가는 실제 내용</li>
              <li><code>.ui-dropdown</code> - 클릭하면 펼쳐지는 드롭다운 메뉴</li>
              <li><code>.ui-tooltip</code> - 마우스를 올리면 나타나는 설명 툴팁</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

