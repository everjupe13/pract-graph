import { FC } from 'react'

import { GraphNetwork } from '@/components/entities/graph'

export const GraphView: FC = () => {
  return (
    <>
      <GraphNetwork className="h-[calc(100vh-50px)] md:h-[calc(100vh-45px)]" />
    </>
  )
}
