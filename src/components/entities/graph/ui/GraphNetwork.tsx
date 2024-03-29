import { FC } from 'react'
import Network from 'react-graph-vis'

import { cn } from '@/app/utils'
import { useGlossaryData } from '@/components/features/glossary-data'

const options = {
  layout: {
    hierarchical: {
      levelSeparation: 350,
      blockShifting: true,
      edgeMinimization: true,
      parentCentralization: true,
      direction: 'UD',
      nodeSpacing: 400,
      sortMethod: 'directed'
    }
  },
  nodes: {
    shape: 'dot',
    size: 16,
    font: {
      size: 12
    }
  },
  edges: {
    font: {
      size: 12
    }
  },
  physics: false
}

type Props = {
  className?: string
}

export const GraphNetwork: FC<Props> = ({ className }) => {
  const { data } = useGlossaryData()

  const graph = {
    nodes: data.nodes,
    edges: data.edges
  }

  return (
    <div className={cn('h-full w-full', className)}>
      <Network graph={graph} options={options} />
    </div>
  )
}

export default GraphNetwork
