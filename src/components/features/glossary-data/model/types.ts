export type DataType = {
  nodes: {
    id: number
    label: string
    description: string
  }[]
  edges: {
    label: string
    from: number
    to: number
  }[]
}
