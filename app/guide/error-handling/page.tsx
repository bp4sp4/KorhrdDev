'use client'

import styles from './error-handling.module.css'
import CopyableCodeBlock from '../components/CopyableCodeBlock'

export default function ErrorHandlingPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>에러 처리 & 상태</h1>
      <p className={styles.description}>
        사용자 경험을 위해 다양한 상태(에러, 로딩, 빈 상태)를 적절하게 처리하는 방법을 안내합니다.
      </p>

      {/* 에러 상태 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>에러 상태 UI</h2>
        <p className={styles.text}>
          에러가 발생했을 때 사용자에게 명확하게 알려주고, 다음 행동을 유도하는 UI를 제공해야 합니다.
        </p>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>에러 상태 구조</h3>
          <p className={styles.text}>
            에러 상태는 다음 요소들을 포함해야 합니다:
          </p>
          <ul className={styles.list}>
            <li>에러를 나타내는 아이콘</li>
            <li>에러 제목 (예: "오류가 발생했습니다")</li>
            <li>에러 메시지 (구체적인 이유 설명)</li>
            <li>재시도 버튼 또는 다른 액션</li>
          </ul>

          <CopyableCodeBlock code={`// 에러 상태 컴포넌트
<div className={styles.errorState}>
  <svg className={styles.errorIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
    <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2"/>
    <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2"/>
  </svg>
  <h3 className={styles.errorTitle}>오류가 발생했습니다</h3>
  <p className={styles.errorMessage}>
    데이터를 불러오는 중 문제가 발생했습니다.<br />
    잠시 후 다시 시도해주세요.
  </p>
  <button className={styles.errorAction} onClick={() => window.location.reload()}>
    다시 시도
  </button>
</div>`} />

          <p className={styles.exampleLabel}>실제 화면에서 보이는 모습</p>
          <div className={styles.exampleGroup}>
            <div className={styles.errorState}>
              <svg className={styles.errorIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <h3 className={styles.errorTitle}>오류가 발생했습니다</h3>
              <p className={styles.errorMessage}>
                데이터를 불러오는 중 문제가 발생했습니다.<br />
                잠시 후 다시 시도해주세요.
              </p>
              <button className={styles.errorAction} onClick={() => window.location.reload()}>
                다시 시도
              </button>
            </div>
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>에러 상태 클래스명</h3>
          <div className={styles.infoBox}>
            <h4 className={styles.infoBoxTitle}>에러 상태 관련 클래스</h4>
            <ul className={styles.infoBoxList}>
              <li><code>.error_state</code> - 에러 상태를 감싸는 컨테이너</li>
              <li><code>.error_icon</code> - 에러 아이콘</li>
              <li><code>.error_title</code> - 에러 제목</li>
              <li><code>.error_message</code> - 에러 메시지</li>
              <li><code>.error_action</code> - 재시도 등의 액션 버튼</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 로딩 상태 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>로딩 상태 UI</h2>
        <p className={styles.text}>
          데이터를 불러오는 동안 사용자에게 진행 중임을 알려주는 로딩 상태를 표시해야 합니다.
        </p>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>스피너 로딩</h3>
          <p className={styles.text}>
            간단한 로딩 상태일 때 스피너를 사용합니다.
          </p>

          <CopyableCodeBlock code={`// 스피너 로딩
<div className={styles.loadingState}>
  <div className={styles.spinner}></div>
  <p className={styles.loadingMessage}>데이터를 불러오는 중...</p>
</div>`} />

          <p className={styles.exampleLabel}>실제 화면에서 보이는 모습</p>
          <div className={styles.exampleGroup}>
            <div className={styles.loadingState}>
              <div className={styles.spinner}></div>
              <p className={styles.loadingMessage}>데이터를 불러오는 중...</p>
            </div>
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>스켈레톤 로딩</h3>
          <p className={styles.text}>
            콘텐츠의 구조를 미리 보여주는 스켈레톤 UI는 더 나은 사용자 경험을 제공합니다.
          </p>

          <CopyableCodeBlock code={`// 스켈레톤 로딩
<div className={styles.skeletonCard}>
  <div className={styles.loadingSkeleton} style={{ width: '60%', height: '24px' }}></div>
  <div className={styles.loadingSkeleton} style={{ width: '100%', height: '16px' }}></div>
  <div className={styles.loadingSkeleton} style={{ width: '80%', height: '16px' }}></div>
</div>`} />

          <p className={styles.exampleLabel}>실제 화면에서 보이는 모습</p>
          <div className={styles.exampleGroup}>
            <div className={styles.skeletonCard}>
              <div className={styles.loadingSkeleton} style={{ width: '60%', height: '24px', marginBottom: '0.75rem' }}></div>
              <div className={styles.loadingSkeleton} style={{ width: '100%', height: '16px', marginBottom: '0.75rem' }}></div>
              <div className={styles.loadingSkeleton} style={{ width: '80%', height: '16px' }}></div>
            </div>
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>로딩 상태 클래스명</h3>
          <div className={styles.infoBox}>
            <h4 className={styles.infoBoxTitle}>로딩 상태 관련 클래스</h4>
            <ul className={styles.infoBoxList}>
              <li><code>.loading_state</code> - 로딩 상태를 감싸는 컨테이너</li>
              <li><code>.loading_spinner</code> - 회전하는 스피너</li>
              <li><code>.loading_message</code> - 로딩 메시지</li>
              <li><code>.loading_skeleton</code> - 스켈레톤 UI 요소</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 빈 상태 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>빈 상태 처리</h2>
        <p className={styles.text}>
          데이터가 없을 때 사용자에게 명확하게 안내하고, 다음 행동을 유도해야 합니다.
        </p>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>빈 상태 구조</h3>
          <p className={styles.text}>
            빈 상태는 다음 요소들을 포함해야 합니다:
          </p>
          <ul className={styles.list}>
            <li>빈 상태를 나타내는 아이콘</li>
            <li>빈 상태 제목 (예: "데이터가 없습니다")</li>
            <li>설명 메시지 (왜 비어있는지 설명)</li>
            <li>액션 버튼 (새로 만들기, 새로고침 등)</li>
          </ul>

          <CopyableCodeBlock code={`// 빈 상태 컴포넌트
<div className={styles.emptyState}>
  <svg className={styles.emptyIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
  <h3 className={styles.emptyTitle}>데이터가 없습니다</h3>
  <p className={styles.emptyMessage}>
    아직 등록된 항목이 없습니다.<br />
    새로 추가해보세요.
  </p>
  <button className={styles.emptyAction}>
    새로 추가하기
  </button>
</div>`} />

          <p className={styles.exampleLabel}>실제 화면에서 보이는 모습</p>
          <div className={styles.exampleGroup}>
            <div className={styles.emptyState}>
              <svg className={styles.emptyIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              <h3 className={styles.emptyTitle}>데이터가 없습니다</h3>
              <p className={styles.emptyMessage}>
                아직 등록된 항목이 없습니다.<br />
                새로 추가해보세요.
              </p>
              <button className={styles.emptyAction}>
                새로 추가하기
              </button>
            </div>
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>빈 상태 클래스명</h3>
          <div className={styles.infoBox}>
            <h4 className={styles.infoBoxTitle}>빈 상태 관련 클래스</h4>
            <ul className={styles.infoBoxList}>
              <li><code>.empty_state</code> - 빈 상태를 감싸는 컨테이너</li>
              <li><code>.empty_icon</code> - 빈 상태 아이콘</li>
              <li><code>.empty_title</code> - 빈 상태 제목</li>
              <li><code>.empty_message</code> - 설명 메시지</li>
              <li><code>.empty_action</code> - 액션 버튼</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 베스트 프랙티스 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>베스트 프랙티스</h2>
        
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>상태 우선순위</h3>
          <p className={styles.text}>
            여러 상태가 동시에 발생할 수 있을 때는 다음 순서로 표시합니다:
          </p>
          <ol className={styles.list} style={{ listStyleType: 'decimal' }}>
            <li><strong>에러 상태</strong> - 가장 우선적으로 표시</li>
            <li><strong>로딩 상태</strong> - 데이터를 불러오는 중</li>
            <li><strong>빈 상태</strong> - 데이터가 없을 때</li>
            <li><strong>정상 상태</strong> - 데이터가 정상적으로 표시됨</li>
          </ol>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>사용자 친화적인 메시지</h3>
          <p className={styles.text}>
            에러나 빈 상태 메시지는 기술적인 용어보다 사용자에게 친숙한 언어로 작성하세요.
          </p>
          <div className={styles.warning}>
            <p>
              <strong>❌ 피해야 할 표현:</strong> "HTTP 500 에러", "데이터베이스 연결 실패"<br />
              <strong>✅ 권장 표현:</strong> "데이터를 불러오는 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요."
            </p>
          </div>
        </div>

        <div className={styles.tip}>
          <p>
            <strong>💡 팁:</strong> 상태별로 일관된 디자인 패턴을 사용하면 사용자가 더 쉽게 이해할 수 있습니다. 
            프로젝트 전반에서 같은 스타일의 에러/로딩/빈 상태 UI를 사용하세요.
          </p>
        </div>
      </section>
    </div>
  )
}

