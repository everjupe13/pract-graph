import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const LayoutDefault: FC = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export { LayoutDefault }
