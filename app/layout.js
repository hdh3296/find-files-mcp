import './globals.css'

export const metadata = {
  title: 'Find Files MCP',
  description: '파일 찾기 도구 프로젝트',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </body>
    </html>
  )
}