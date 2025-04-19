import { SearchIcon } from '@/components/ui/icons';
import FileList from '@/components/FileList';

export default function Home() {
  return (
    <main className="min-h-screen py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 text-primary">Find Files MCP</h1>
        <p className="text-lg text-gray-600">빠르고 쉽게 파일을 찾아보세요</p>
      </div>
      
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex mb-6">
          <div className="relative flex-grow">
            <input 
              type="text" 
              placeholder="파일 이름이나 내용을 검색하세요"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <span className="absolute right-3 top-2.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
          <button className="ml-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors">
            검색
          </button>
        </div>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="documents" className="rounded text-primary focus:ring-primary" />
            <label htmlFor="documents" className="text-sm">문서 (.doc, .pdf, .txt)</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="images" className="rounded text-primary focus:ring-primary" />
            <label htmlFor="images" className="text-sm">이미지 (.jpg, .png, .gif)</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="archives" className="rounded text-primary focus:ring-primary" />
            <label htmlFor="archives" className="text-sm">압축파일 (.zip, .rar)</label>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <h2 className="text-lg font-medium mb-2">검색 결과</h2>
          <p className="text-gray-500 text-sm">파일을 검색하면 이곳에 결과가 표시됩니다.</p>
        </div>
      </div>
    </main>
  )
}