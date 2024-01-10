import { create } from 'zustand'

import GLOSSARY_RAW_DATA from '@/data/index.json'

import type { DataType } from './types'

type GlossaryDataStore = {
  data: DataType
  changeData: (e: DataType) => void
}

export const useGlossaryData = create<GlossaryDataStore>(set => ({
  data: { ...GLOSSARY_RAW_DATA },
  changeData: e => set(() => ({ data: e }))
}))
