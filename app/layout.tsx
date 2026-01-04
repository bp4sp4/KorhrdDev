import type { Metadata } from 'next'
import '../styles/base.css'
import '../styles/layout.css'
import '../styles/components.css'

export const metadata: Metadata = {
  title: '한평생 개발본부',
  description: '한평생 개발본부 - 개발&디자인 가이드',
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

