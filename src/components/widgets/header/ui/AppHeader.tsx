import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { cn } from '@/app/utils'

const AppHeader: FC = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-[50] flex h-50 items-center justify-between border-b border-[#d5dae4] bg-white px-20 py-10 shadow-sm lg:px-16 md:h-40">
      <div className="flex items-center gap-x-20">
        <div className="flex items-center gap-x-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn('font-medium text-16 md:text-14', isActive && 'font-bold')
            }
          >
            Глоссарий
          </NavLink>
          <NavLink
            to="/graph"
            className={({ isActive }) =>
              cn('font-medium text-16 md:text-14', isActive && 'font-bold')
            }
          >
            Граф
          </NavLink>
        </div>
      </div>

      <div className="cursor-pointer font-hauora font-medium text-12">
        <a
          href="https://github.com/everjupe13/pract-graph"
          target="_blank"
          rel="norefferer noopener nofollow"
          className="flex items-center gap-x-0"
        >
          <img
            src="/github.svg"
            alt="gh"
            className="h-32 w-32 md:h-26 md:w-26"
          />
          <span>Бакиров Илья | P4208</span>
        </a>
      </div>
    </header>
  )
}

export default AppHeader
