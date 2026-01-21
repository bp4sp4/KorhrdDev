import styles from './changelog.module.css'

export default function ChangelogPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>릴리즈 노트</h1>
      <p className={styles.description}>
        프로젝트의 버전별 주요 변경사항과 업데이트 내역을 기록합니다.
      </p>

      {/* 최근 업데이트 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>v1.0.1 - 2026년 01월 21일</h2>
        <p className={styles.text}>
          이미지/아이콘 활용 가이드와 Spacing 가이드를 추가하고, 사이드바 구조를 정돈했습니다.
        </p>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>신규 추가</h3>
          <ul className={styles.list}>
            <li>
              <strong>Spacing 가이드</strong> (<code className={styles.code}>/guide/css-foundation/spacing</code>)
              <ul className={styles.list} style={{ marginTop: '0.5rem' }}>
                <li>unit-1 ~ unit-15 표와 복사 버튼 제공</li>
                <li>CSS Modules/전역 CSS 사용 예시 추가</li>
              </ul>
            </li>
            <li>
              <strong>이미지 & 아이콘 가이드</strong> (<code className={styles.code}>/guide/image-icon-guide</code>)
              <ul className={styles.list} style={{ marginTop: '0.5rem' }}>
                <li>Next.js Image 사용법과 Lazy Loading 예시</li>
                <li>SVG 아이콘 사용 패턴과 포맷 선택 가이드</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>구조/내비게이션 변경</h3>
          <ul className={styles.list}>
            <li>사이드바 순서를 재정렬: 기본 파일 구조 → CSS 초기 세팅 → layout.tsx 가이드 → 클래스명 가이드</li>
            <li>layout.css, components.css 항목 비활성화 처리</li>
            <li>클래스명 가이드의 버튼 섹션을 미완성 상태로 표시하고 상태 섹션 제거</li>
            <li>레이아웃 가이드, 폼 가이드, 에러 처리 & 상태 링크 제거</li>
          </ul>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>문서 수정</h3>
          <ul className={styles.list}>
            <li>Spacing 가이드: 제목을 “사용 방법 예시”로 변경하고 주의사항 문구 단순화</li>
          </ul>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>삭제/제거</h3>
          <ul className={styles.list}>
            <li>사이드바에서 레이아웃 가이드, 폼 가이드, 에러 처리 & 상태 메뉴 제거</li>
            <li>이미지 & 아이콘 가이드에서 불필요한 예제 섹션 정리(반응형 이미지, 이미지 최적화 옵션, 이미지 크기 최적화, 인라인 SVG 예제)</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>v1.0.0 - 2026년 01월 04~05일</h2>
        <p className={styles.text}>
          프론트엔드 개발 표준 가이드 초기 버전입니다. 개발 표준 및 베스트 프랙티스를 안내하는 가이드 시스템을 구축했습니다.
        </p>

        {/* 핵심 가이드 페이지 */}
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>핵심 가이드 페이지</h3>
          
          <ul className={styles.list}>
            <li>
              <strong>가이드 소개</strong> (<code className={styles.code}>/guide/introduction</code>)
              <ul className={styles.list} style={{ marginTop: '0.5rem' }}>
                <li>표준 가이드를 만든 이유와 장점 소개</li>
                <li>가이드 사용 방법 안내</li>
              </ul>
            </li>
            <li>
              <strong>기본 파일 구조</strong> (<code className={styles.code}>/guide/file-structure</code>)
              <ul className={styles.list} style={{ marginTop: '0.5rem' }}>
                <li>프로젝트 기본 파일 구조 시각화</li>
                <li>인터랙티브 파일 트리 컴포넌트</li>
                <li>각 파일의 역할 설명</li>
              </ul>
            </li>
            <li>
              <strong>클래스명 가이드</strong> (<code className={styles.code}>/guide/class-naming</code>)
              <ul className={styles.list} style={{ marginTop: '0.5rem' }}>
                <li>개요, 레이아웃, 컴포넌트, 버튼, 텍스트, 상태, 예제</li>
                <li>BEM 방법론 기반 네이밍 규칙</li>
              </ul>
            </li>
            <li>
              <strong>CSS 초기 세팅</strong> (<code className={styles.code}>/guide/css-foundation</code>)
              <ul className={styles.list} style={{ marginTop: '0.5rem' }}>
                <li>초기세팅: normalize, tokens, base, layout, components</li>
                <li>Typography: Display, Title, Heading, Headline, Body, Label, Caption</li>
                <li>Spacing: 간격 시스템</li>
              </ul>
            </li>
            <li>
              <strong>색상 팔레트</strong> (<code className={styles.code}>/guide/color-palette</code>)
              <ul className={styles.list} style={{ marginTop: '0.5rem' }}>
                <li>Blue, Green, Gray 색상 목록</li>
                <li>색상 클릭 시 코드 복사 기능</li>
              </ul>
            </li>
            <li>
              <strong>레이아웃 가이드</strong> (<code className={styles.code}>/guide/layout-guide</code>)
              <ul className={styles.list} style={{ marginTop: '0.5rem' }}>
                <li>Desktop, Desktop 2 레이아웃 규격</li>
              </ul>
            </li>
            <li>
              <strong>로고 가이드</strong> (<code className={styles.code}>/guide/logo-guide</code>)
              <ul className={styles.list} style={{ marginTop: '0.5rem' }}>
                <li>로고 이미지 목록 및 다운로드 기능</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* 신규 추가된 가이드 */}
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>신규 추가된 가이드</h3>
          
          <ul className={styles.list}>
            <li>
              <strong>폼 가이드</strong> (<code className={styles.code}>/guide/form-guide</code>)
              <ul className={styles.list} style={{ marginTop: '0.5rem' }}>
                <li>입력 폼 구조 및 다양한 입력 타입 (텍스트, textarea, select, checkbox, radio)</li>
                <li>검증 및 에러 처리 패턴</li>
                <li>필수 필드 표시 방법</li>
                <li>접근성 고려사항</li>
                <li>실제 작동하는 폼 예제 포함</li>
              </ul>
            </li>
            <li>
              <strong>에러 처리 & 상태</strong> (<code className={styles.code}>/guide/error-handling</code>)
              <ul className={styles.list} style={{ marginTop: '0.5rem' }}>
                <li>에러 상태 UI (아이콘, 제목, 메시지, 재시도 버튼)</li>
                <li>로딩 상태 UI (스피너, 스켈레톤 로딩)</li>
                <li>빈 상태 처리 (아이콘, 제목, 설명, 액션 버튼)</li>
                <li>상태 우선순위 및 베스트 프랙티스</li>
              </ul>
            </li>
            <li>
              <strong>반응형 디자인 가이드</strong> (<code className={styles.code}>/guide/responsive-design</code>)
              <ul className={styles.list} style={{ marginTop: '0.5rem' }}>
                <li>표준 브레이크포인트 (모바일, 태블릿, 데스크탑)</li>
                <li>반응형 레이아웃 패턴 (그리드, 플렉스)</li>
                <li>반응형 타이포그래피 및 간격</li>
                <li>모바일 최적화 방법</li>
                <li>CSS Modules 기반 미디어 쿼리 사용법</li>
              </ul>
            </li>
            <li>
              <strong>릴리즈 노트</strong> (<code className={styles.code}>/guide/changelog</code>)
              <ul className={styles.list} style={{ marginTop: '0.5rem' }}>
                <li>프로젝트 변경사항 및 업데이트 내역 기록</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* UI/UX 기능 */}
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>UI/UX 기능</h3>
          <ul className={styles.list}>
            <li>사이드바 아코디언 메뉴로 가이드 탐색</li>
            <li>현재 경로에 맞는 메뉴 자동 열림 기능</li>
            <li>활성 메뉴 하이라이트 표시</li>
            <li>2단계 및 3단계 중첩 메뉴 지원</li>
            <li>코드 복사 기능 (<code className={styles.code}>CopyableCodeBlock</code>)</li>
            <li>인터랙티브 파일 트리 컴포넌트</li>
            <li>사이드바 하단 푸터 (버전 정보, 릴리즈 노트 링크)</li>
            <li>모든 가이드 페이지에 실제 작동하는 예제 코드</li>
          </ul>
        </div>

        {/* 버그 수정 */}
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>버그 수정</h3>

          <ul className={styles.list}>
            <li>
              <strong>Hydration 에러 해결</strong>
              <ul className={styles.list} style={{ marginTop: '0.5rem' }}>
                <li>서버와 클라이언트 렌더링 불일치 문제 해결</li>
                <li><code className={styles.code}>activePath</code> 상태 추가로 클라이언트에서만 pathname 저장</li>
                <li><code className={styles.code}>mounted</code> 상태로 초기 렌더링 일치 보장</li>
                <li>버튼 내부 <code className={styles.code}>&lt;a&gt;</code> 태그를 <code className={styles.code}>&lt;span&gt;</code>으로 변경</li>
              </ul>
            </li>
            <li>
              에러 처리 가이드 페이지에 <code className={styles.code}>'use client'</code> 추가
            </li>
          </ul>
        </div>

        {/* 버그 수정 및 기술적 개선 */}
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>버그 수정 및 기술적 개선</h3>
          <ul className={styles.list}>
            <li>
              <strong>Hydration 에러 해결</strong>
              <ul className={styles.list} style={{ marginTop: '0.5rem' }}>
                <li>서버와 클라이언트 렌더링 불일치 문제 해결</li>
                <li><code className={styles.code}>activePath</code> 상태 추가</li>
                <li><code className={styles.code}>mounted</code> 상태로 초기 렌더링 일치 보장</li>
                <li>버튼 내부 <code className={styles.code}>&lt;a&gt;</code> 태그를 <code className={styles.code}>&lt;span&gt;</code>으로 변경</li>
              </ul>
            </li>
            <li>에러 처리 가이드 페이지에 <code className={styles.code}>'use client'</code> 추가</li>
            <li>사이드바 레이아웃 개선 (flex 컨테이너, 푸터 하단 고정)</li>
          </ul>
        </div>

        {/* 문서화 */}
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>문서화</h3>
          <ul className={styles.list}>
            <li>모든 가이드 페이지에 베스트 프랙티스 섹션 추가</li>
            <li>코드 예제에 설명 주석 추가</li>
            <li>접근성 고려사항 명시</li>
            <li>일관된 페이지 구조 및 스타일링 적용</li>
          </ul>
        </div>

        {/* 제거된 기능 */}
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitleSmall}>제거된 기능</h3>
          <ul className={styles.list}>
            <li>반응형 디자인 가이드에서 Tailwind CSS 사용법 제거 (CSS Modules 중심으로 통일)</li>
          </ul>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>기술 스택</h2>
        <ul className={styles.list}>
          <li><strong>프레임워크:</strong> Next.js 14.2.35 (App Router)</li>
          <li><strong>언어:</strong> TypeScript 5.0</li>
          <li><strong>스타일링:</strong> CSS Modules, Tailwind CSS 3.4.1</li>
          <li><strong>UI 컴포넌트:</strong> shadcn UI, Radix UI</li>
        </ul>
      </section>

      {/* 향후 계획 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>향후 계획</h2>
        <ul className={styles.list}>
          <li>컴포넌트 가이드 페이지 추가</li>
          <li>TypeScript 가이드 페이지 추가</li>
          <li>성능 최적화 가이드 페이지 추가</li>
          <li>접근성 가이드 페이지 추가</li>
        </ul>
      </section>
    </div>
  )
}

