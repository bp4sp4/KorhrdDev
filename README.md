# 프론트엔드 개발 가이드

회사 프론트엔드 개발 표준 및 베스트 프랙티스를 안내하는 가이드입니다.  
Next.js 기반의 프로젝트에서 일관된 코드 스타일과 디자인 시스템을 적용하기 위한 가이드입니다.

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.  
기본적으로 `/guide/class-naming` 페이지로 리다이렉트됩니다.

## 📁 프로젝트 구조

```
/
├── app/                          # Next.js App Router
│   ├── guide/                    # 가이드 페이지
│   │   ├── file-structure/       # 기본 파일 구조
│   │   ├── class-naming/         # 클래스명 가이드
│   │   │   ├── overview/         # 개요
│   │   │   ├── layout/           # 레이아웃
│   │   │   ├── component/        # 컴포넌트
│   │   │   ├── button/           # 버튼
│   │   │   ├── text/             # 텍스트
│   │   │   ├── state/            # 상태
│   │   │   └── examples/         # 예제
│   │   ├── css-foundation/       # CSS 초기 세팅 가이드
│   │   │   ├── overview/         # 개요
│   │   │   ├── normalize/        # normalize.css
│   │   │   ├── tokens/           # tokens.css
│   │   │   ├── base/             # base.css
│   │   │   ├── layout/           # layout.css
│   │   │   ├── components/       # components.css
│   │   │   ├── typography/       # Typography 가이드
│   │   │   │   ├── display/      # Display
│   │   │   │   ├── title/        # Title
│   │   │   │   ├── heading/      # Heading
│   │   │   │   ├── headline/     # Headline
│   │   │   │   ├── body/         # Body
│   │   │   │   ├── label/        # Label
│   │   │   │   └── caption/      # Caption
│   │   │   └── spacing/          # Spacing
│   │   ├── color-palette/        # 색상 팔레트
│   │   ├── layout-guide/         # 레이아웃 가이드
│   │   ├── logo-guide/           # 로고 가이드
│   │   ├── components/           # 가이드 공통 컴포넌트
│   │   │   └── CopyableCodeBlock.tsx
│   │   ├── layout.tsx            # 가이드 레이아웃
│   │   └── sidebar.tsx            # 사이드바 네비게이션
│   ├── layout.tsx                # 루트 레이아웃
│   └── page.tsx                  # 홈페이지 (리다이렉트)
├── components/                    # 공통 컴포넌트
│   └── ui/                       # UI 컴포넌트 (shadcn)
│       ├── file-tree.tsx
│       ├── button.tsx
│       └── scroll-area.tsx
├── lib/                          # 유틸리티
│   └── utils.ts                  # cn 함수 (clsx + tailwind-merge)
├── styles/                        # 스타일 파일
│   ├── normalize.css             # 브라우저 스타일 리셋
│   ├── tokens.css                # 디자인 토큰 (Typography)
│   ├── base.css                  # 기본 스타일 + Tailwind
│   ├── layout.css                 # 레이아웃 스타일
│   └── components.css             # 컴포넌트 스타일
├── public/                        # 정적 파일
│   └── images/                   # 로고 이미지
├── tailwind.config.js             # Tailwind CSS 설정
├── postcss.config.js              # PostCSS 설정
└── package.json
```

## 📚 가이드 내용

### 1. 기본 파일 구조
새 프로젝트를 만들었을 때 기본적으로 생성되는 파일 구조를 확인할 수 있습니다.

### 2. 클래스명 가이드
- **개요**: 클래스 네이밍의 기본 철학과 규칙
- **레이아웃**: 레이아웃 관련 클래스 네이밍
- **컴포넌트**: UI 컴포넌트 클래스 네이밍
- **버튼**: 버튼 클래스 네이밍
- **텍스트**: 텍스트 관련 클래스 네이밍
- **상태**: 상태 클래스 네이밍 (is-active, is-disabled 등)
- **예제**: 잘못된 예 / 올바른 예

### 3. CSS 초기 세팅 가이드
- **개요**: CSS 파일 구조와 사용 방법
- **normalize.css**: 브라우저 스타일 리셋
- **tokens.css**: 디자인 토큰 (Typography)
- **base.css**: 기본 스타일
- **layout.css**: 레이아웃 스타일
- **components.css**: 공통 컴포넌트 스타일
- **Typography**: 
  - Display, Title, Heading, Headline, Body, Label, Caption
  - 각 타이포그래피 스타일의 미리보기와 복사 가능한 코드 제공
- **Spacing**: 간격 시스템 가이드

### 4. 색상 팔레트
프로젝트에서 사용하는 색상 목록 (Blue, Green, Gray)  
각 색상을 클릭하면 색상 코드가 복사됩니다.

### 5. 레이아웃 가이드
프로젝트에서 사용하는 레이아웃 크기와 여백 규격  
Desktop, Desktop 2 레이아웃의 CSS 코드를 복사할 수 있습니다.

### 6. 로고 가이드
프로젝트에서 사용하는 로고 이미지 목록  
각 로고를 클릭하면 다운로드할 수 있습니다.

## 🎨 디자인 시스템

- **프레임워크**: Next.js 14 (App Router)
- **스타일링**: 
  - CSS Modules (각 페이지별 스타일)
  - Tailwind CSS (유틸리티 클래스)
  - normalize.css (브라우저 리셋)
- **UI 구조**: 왼쪽 사이드바 + 오른쪽 콘텐츠
- **디자인 컨셉**: 토스 스타일의 미니멀하고 현대적인 디자인
- **컴포넌트**: shadcn UI 기반 컴포넌트 사용

## 📝 주요 기능

### 코드 복사 기능
모든 코드 예제는 `CopyableCodeBlock` 컴포넌트를 통해 복사 가능합니다.

### 반응형 네비게이션
사이드바의 아코디언 메뉴로 가이드 섹션을 탐색할 수 있습니다.

### 이미지 다운로드
로고 가이드에서 이미지를 클릭하면 다운로드할 수 있습니다.

## 🔧 기술 스택

- **프레임워크**: Next.js 14.2.35
- **언어**: TypeScript 5.0
- **UI 라이브러리**: React 18.2
- **스타일링**: 
  - CSS Modules
  - Tailwind CSS 3.4.1
  - PostCSS
- **UI 컴포넌트**: 
  - shadcn UI
  - Radix UI (Accordion, Scroll Area, Slot)
- **유틸리티**: 
  - clsx
  - tailwind-merge
  - class-variance-authority

## 📦 설치된 패키지

### Dependencies
- `next`: Next.js 프레임워크
- `react`, `react-dom`: React 라이브러리
- `@radix-ui/react-accordion`: 아코디언 컴포넌트
- `@radix-ui/react-scroll-area`: 스크롤 영역 컴포넌트
- `@radix-ui/react-slot`: Slot 컴포넌트
- `class-variance-authority`: 클래스 변형 관리
- `clsx`: 조건부 클래스명 유틸리티
- `tailwind-merge`: Tailwind 클래스 병합
- `tailwindcss-animate`: Tailwind 애니메이션

### DevDependencies
- `tailwindcss`: Tailwind CSS
- `autoprefixer`: CSS 자동 접두사
- `postcss`: PostCSS
- `typescript`: TypeScript
- `@types/*`: TypeScript 타입 정의

## 🚦 사용 방법

1. 개발 서버 실행: `npm run dev`
2. 가이드 페이지에서 필요한 정보 확인
3. 코드 예제 복사하여 프로젝트에 적용
4. 클래스 네이밍 규칙 준수
5. CSS 토큰 활용하여 일관된 스타일 적용

## 📄 라이선스

이 프로젝트는 회사 내부 사용을 위한 가이드입니다.
