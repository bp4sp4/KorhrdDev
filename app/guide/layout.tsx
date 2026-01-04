import Sidebar from './sidebar'

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="layout-wrapper">
      <Sidebar />
      <main className="layout-content">
        {children}
      </main>
    </div>
  )
}

