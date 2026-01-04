import type { Metadata } from 'next'
import '../styles/base.css'
import '../styles/components.css'

export const metadata: Metadata = {
  title: '프론트엔드 개발 가이드',
  description: '회사 프론트엔드 개발 표준 가이드',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}

