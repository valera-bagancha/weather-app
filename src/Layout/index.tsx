import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { Header } from '../components/Header'
import { avoidHeaderRoutes } from '../constants/routes/includeHeaderRoutes'
import { Router } from '../routes'

export const Layout: FC = () => {
  const { pathname } = useLocation()

  return (
    <>
      {!avoidHeaderRoutes.includes(pathname) && <Header />}
      <Router />
    </>
  )
}
