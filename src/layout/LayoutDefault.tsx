import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { AppHeader } from '@/components/widgets/header'

const LayoutDefault: FC = () => {
  return (
    <>
      <AppHeader />
      <main className="pt-50 md:pt-40">
        <Outlet />
      </main>
    </>
  )
}

export { LayoutDefault }
