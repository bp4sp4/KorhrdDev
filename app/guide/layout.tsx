import Sidebar from './sidebar'

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="layout_wrapper">
      <Sidebar />
      <main className="layout_content">
        {children}
      </main>
    </div>
  )
}

