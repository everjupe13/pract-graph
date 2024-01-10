import { FC, useState } from 'react'

import { Glossary } from '@/components/entities/glossary'
import {
  FileDownloader,
  FileUploader
} from '@/components/features/file-processor'
import { UploadedFileType } from '@/components/features/file-processor/model/types'
import {
  type DataType,
  useGlossaryData
} from '@/components/features/glossary-data'
import { parseJsonSafely } from '@/utils'

const checkDataValidity = (e: DataType) => {
  if (
    'nodes' in e &&
    'edges' in e &&
    Array.isArray(e.nodes) &&
    Array.isArray(e.edges)
  ) {
    return true
  }

  return false
}

export const HomePage: FC = () => {
  const { data, changeData } = useGlossaryData()
  const [uploadError, setUploadError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleUploadData = (_e: UploadedFileType) => {
    setUploadError('')
    setLoading(true)
  }

  const handleUploadEndData = (e: UploadedFileType) => {
    const _data = parseJsonSafely(e.data)
    setLoading(false)
    if (!_data) {
      return setUploadError('Не удалось загрузить данные')
    }
    if (!checkDataValidity(_data as DataType)) {
      return setUploadError('Неверный формат данных')
    }

    changeData(_data as DataType)
  }
  return (
    <div className="p-20 lg:p-16">
      <div className="mb-30 flex flex-col gap-y-10">
        <div className="flex items-center gap-x-10">
          <FileUploader
            onUpload={handleUploadData}
            onReadEnd={handleUploadEndData}
            disabled={loading}
          />
          <span>{'|'}</span>
          <FileDownloader downloadedDataObject={data} disabled={loading} />
        </div>
        {uploadError && (
          <div className="flex items-center">
            <div className="rounded-5 bg-red/40 px-10 py-8 text-white text-12">
              {uploadError}
            </div>
          </div>
        )}
      </div>
      {!loading && <Glossary />}
    </div>
  )
}
