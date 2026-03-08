# 프론트엔드 개발 가이드

회사 프론트엔드 개발 표준 및 베스트 프랙티스를 안내하는 가이드입니다.
Next.js 기반의 프로젝트에서 일관된 코드 스타일과 디자인 시스템을 적용하기 위한 가이드입니다.

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.
기본적으로 `/guide/introduction` 페이지로 리다이렉트됩니다.

## 프로젝트 구조

```
/
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # 루트 레이아웃
│   ├── page.tsx                      # 홈페이지 (리다이렉트)
│   ├── guide/                        # 가이드 페이지
│   │   ├── layout.tsx                # 가이드 레이아웃 (사이드바 + 콘텐츠)
│   │   ├── sidebar.tsx               # 사이드바 네비게이션
│   │   ├── components/               # 가이드 공통 컴포넌트
│   │   │   ├── CopyableCodeBlock.tsx # 코드 복사 컴포넌트
│   │   │   └── FileTree.tsx          # 파일 트리 시각화 컴포넌트
│   │   ├── introduction/             # 가이드 소개
│   │   ├── file-structure/           # 기본 파일 구조
│   │   ├── class-naming/             # 클래스명 가이드
│   │   │   ├── overview/             # 개요
│   │   │   ├── layout/               # 레이아웃
│   │   │   ├── component/            # 컴포넌트
│   │   │   ├── button/               # 버튼
│   │   │   ├── text/                 # 텍스트
│   │   │   └── examples/             # 예제
│   │   ├── css-foundation/           # CSS 초기 세팅 가이드
│   │   │   ├── overview/             # 개요
│   │   │   ├── normalize/            # normalize.css
│   │   │   ├── pretendard/           # Pretendard 폰트 세팅
│   │   │   ├── tokens/               # tokens.css (디자인 토큰)
│   │   │   ├── base/                 # base.css
│   │   │   ├── layout/               # layout.css
│   │   │   ├── components/           # components.css
│   │   │   ├── typography/           # Typography 가이드
│   │   │   │   ├── display/          # Display
│   │   │   │   ├── title/            # Title
│   │   │   │   ├── headline/         # Headline
│   │   │   │   ├── body/             # Body
│   │   │   │   ├── label/            # Label
│   │   │   │   └── components/       # TypographyCard 컴포넌트
│   │   │   └── spacing/              # Spacing
│   │   ├── layout-tsx/               # layout.tsx 가이드
│   │   ├── environment-variables/    # 환경 변수 관리
│   │   ├── color-palette/            # 색상 팔레트
│   │   ├── logo-guide/               # 로고 가이드
│   │   ├── image-icon-guide/         # 이미지 & 아이콘 가이드
│   │   ├── responsive-design/        # 반응형 디자인 가이드
│   │   └── changelog/                # 변경사항
│   └── docs/                         # 내부 문서
├── components/                       # 공통 컴포넌트
│   └── ui/                           # UI 컴포넌트 (shadcn)
│       ├── button.tsx
│       ├── file-tree.tsx
│       └── scroll-area.tsx
├── lib/                              # 유틸리티
│   └── utils.ts                      # cn 함수 (clsx + tailwind-merge)
├── styles/                           # 글로벌 스타일 파일
│   ├── normalize.css                 # 브라우저 스타일 리셋
│   ├── tokens.css                    # 디자인 토큰 (Typography)
│   ├── base.css                      # 기본 스타일 + Tailwind
│   ├── layout.css                    # 레이아웃 스타일
│   └── components.css                # 컴포넌트 스타일
├── public/                           # 정적 파일
│   ├── fonts/                        # 폰트 파일 (Pretendard)
│   └── images/                       # 로고 이미지
├── tailwind.config.js                # Tailwind CSS 설정
├── postcss.config.js                 # PostCSS 설정
├── components.json                   # shadcn/ui 설정
├── tsconfig.json                     # TypeScript 설정
├── next.config.js                    # Next.js 설정
└── package.json
```

## 가이드 내용

### 1. 가이드 소개
프론트엔드 개발 가이드의 목적과 활용 방법을 소개합니다.

### 2. 기본 파일 구조
새 프로젝트를 만들었을 때 기본적으로 생성되는 파일 구조를 확인할 수 있습니다.

### 3. CSS 초기 세팅 가이드
- **개요**: CSS 파일 구조와 적용 순서
- **normalize.css**: 브라우저 스타일 리셋
- **Pretendard**: 프로젝트 기본 폰트 세팅
- **tokens.css**: 디자인 토큰 (Typography)
- **base.css**: 기본 스타일
- **layout.css**: 레이아웃 스타일
- **components.css**: 공통 컴포넌트 스타일
- **Typography**: Display, Title, Headline, Body, Label 스타일 미리보기 및 코드 제공
- **Spacing**: 간격 시스템 가이드

### 4. layout.tsx 가이드
Next.js App Router의 layout.tsx 작성 방법과 베스트 프랙티스를 안내합니다.

### 5. 환경 변수 관리
프로젝트 환경 변수 설정 및 관리 방법을 안내합니다.

### 6. 클래스명 가이드
- **개요**: 클래스 네이밍의 기본 철학과 규칙 (BEM 기반)
- **레이아웃**: `.layout_*` 레이아웃 관련 클래스 네이밍
- **컴포넌트**: `.ui_*`, `.component_*` UI 컴포넌트 클래스 네이밍
- **버튼**: `.btn_*` 버튼 클래스 네이밍
- **텍스트**: `.text_*` 텍스트 관련 클래스 네이밍
- **예제**: 잘못된 예 / 올바른 예

### 7. 색상 팔레트
프로젝트에서 사용하는 색상 목록 (Blue, Green, Gray)
각 색상을 클릭하면 색상 코드가 복사됩니다.

### 8. 로고 가이드
프로젝트에서 사용하는 로고 이미지 목록
각 로고를 클릭하면 다운로드할 수 있습니다.

### 9. 이미지 & 아이콘 가이드
프로젝트에서 사용하는 이미지 및 아이콘 관리 가이드입니다.

### 10. 반응형 디자인 가이드
반응형 레이아웃 구현을 위한 가이드입니다.

### 11. 변경사항
프로젝트의 버전별 변경사항을 확인할 수 있습니다.

## 디자인 시스템

- **프레임워크**: Next.js 14 (App Router)
- **스타일링**:
  - CSS Modules (페이지별 스코프 스타일)
  - Tailwind CSS (유틸리티 클래스)
  - 커스텀 CSS 레이어 (normalize → tokens → base → layout → components)
- **폰트**: Pretendard (로컬 호스팅)
- **UI 구조**: 왼쪽 사이드바 + 오른쪽 콘텐츠
- **디자인 컨셉**: 토스 스타일의 미니멀하고 현대적인 디자인
- **컴포넌트**: shadcn UI 기반

## 주요 기능

- **코드 복사**: 모든 코드 예제는 `CopyableCodeBlock` 컴포넌트를 통해 클립보드에 복사 가능
- **아코디언 네비게이션**: 사이드바의 아코디언 메뉴로 가이드 섹션 탐색
- **이미지 다운로드**: 로고 가이드에서 이미지를 클릭하면 다운로드
- **색상 코드 복사**: 색상 팔레트에서 클릭하여 hex 코드 복사
- **타이포그래피 미리보기**: 각 Typography 스타일의 시각적 프리뷰 제공

## 기술 스택

| 분류 | 기술 | 버전 |
|------|------|------|
| 프레임워크 | Next.js | ^14.0.0 |
| 언어 | TypeScript | ^5.0.0 |
| UI 라이브러리 | React | ^18.2.0 |
| CSS 프레임워크 | Tailwind CSS | ^3.4.1 |
| UI 컴포넌트 | shadcn UI + Radix UI | - |
| 아이콘 | Lucide React | ^0.562.0 |
| 유틸리티 | clsx, tailwind-merge, CVA | - |
| CSS 후처리 | PostCSS + Autoprefixer | - |

## 사용 방법

1. 개발 서버 실행: `npm run dev`
2. 가이드 페이지에서 필요한 정보 확인
3. 코드 예제 복사하여 프로젝트에 적용
4. 클래스 네이밍 규칙 준수
5. CSS 토큰 활용하여 일관된 스타일 적용

## 스크립트

```bash
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 빌드
npm start        # 프로덕션 서버 실행
npm run lint     # 코드 린팅
```

## 라이선스

이 프로젝트는 회사 내부 사용을 위한 가이드입니다.
