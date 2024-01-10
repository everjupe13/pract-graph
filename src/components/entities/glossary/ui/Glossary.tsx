import { FC } from 'react'

import { useGlossaryData } from '@/components/features/glossary-data'

const Glossary: FC = () => {
  const { data } = useGlossaryData()

  return (
    <>
      <div className="grid grid-cols-5 gap-15 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {data.nodes.map((node, index) => (
          <div key={node.id} className="rounded-3 bg-white p-20">
            <p className="mb-15 font-bold text-12">#{index}</p>
            <p className="mb-10 font-medium text-16">{node.label}</p>
            <p className="text-14">{node.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Glossary
