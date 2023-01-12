import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { FC, useEffect } from 'react'

import { routesDescription } from './routesDescription'
import { useCheckUserAuth } from '../hooks/useCheckUserAuth'
import { ROUTES } from '../constants/routes/routes'

export const Router: FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const RouteList = routesDescription.map(({ path, element }) => (
    <Route key={path} path={path} element={element} />
  ))

  useCheckUserAuth()

  useEffect(() => {
    const slicedPath = `/${pathname.split('/')[1]}`

    !Object.values(ROUTES).includes(slicedPath) && navigate(ROUTES.MAIN)
  }, [])

  return <Routes>{RouteList}</Routes>
}
