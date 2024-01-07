import { FC } from 'react'
import Network from 'react-graph-vis'

import GRAPH_RAW_DATA from '@/data/index.json'

const nodes = GRAPH_RAW_DATA.nodes.map(node => ({ ...node }))
const graph = {
  nodes,
  edges: GRAPH_RAW_DATA.edges
}

const groups = {
  1: { color: 'red', shape: 'ellipse' },
  2: { color: 'blue', shape: 'box' },
  3: { color: 'yellow', shape: 'box' }
}

export const GraphNetwork: FC = () => {
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

  return (
    <div className="h-screen w-screen">
      <Network graph={graph} options={options} groups={groups} />
    </div>
  )
}

export default GraphNetwork
