import { FileIcon, FolderIcon } from './ui/icons';

export default function FileList({ files = [] }) {
  // 아직 실제 파일이 없으므로 샘플 데이터 사용
  const sampleFiles = [
    { id: 1, name: 'document.pdf', type: 'file', size: '2.5 MB', lastModified: '2025-04-19' },
    { id: 2, name: '이미지', type: 'folder', lastModified: '2025-04-18' },
    { id: 3, name: 'report.docx', type: 'file', size: '1.2 MB', lastModified: '2025-04-17' },
  ];

  const filesToDisplay = files.length > 0 ? files : sampleFiles;

  if (filesToDisplay.length === 0) {
    return <p className="text-gray-500 text-center py-4">파일이 없습니다.</p>;
  }

  return (
    <div className="mt-4">
      <ul className="divide-y divide-gray-200">
        {filesToDisplay.map((file) => (
          <li key={file.id} className="py-3 flex items-center hover:bg-gray-50 px-2 rounded-md">
            <span className="mr-3 text-gray-500">
              {file.type === 'folder' ? <FolderIcon /> : <FileIcon />}
            </span>
            <div className="flex-grow">
              <p className="text-sm font-medium text-gray-900">{file.name}</p>
              <p className="text-xs text-gray-500">{file.lastModified}</p>
            </div>
            {file.type === 'file' && (
              <span className="text-xs text-gray-500">{file.size}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}