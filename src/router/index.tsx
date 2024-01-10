import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

import { LayoutDefault } from '@/layout/LayoutDefault'
import { AboutPage } from '@/pages/AboutPage'
import { ErrorPage } from '@/pages/ErrorPage'
import { GraphView } from '@/pages/GraphView'
import { HomePage } from '@/pages/HomePage'
import { Root } from '@/Root'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route element={<LayoutDefault />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/graph" element={<GraphView />} />
      </Route>
    </Route>
  )
)

export default router
