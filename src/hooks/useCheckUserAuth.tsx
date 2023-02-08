import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import { accessTokenSelector } from '../redux/auth/selectors'
import { ROUTES } from '../constants/routes/routes'
import { freeRoutes } from '../constants/routes/freeRoutes'

export const useCheckUserAuth = () => {
  const accessToken = useSelector(accessTokenSelector)

  const navigate = useNavigate()
  const location = useLocation()
  console.log('freeRoutes', freeRoutes);
  
  useEffect(() => {
    if (accessToken || freeRoutes.includes(location.pathname)) return

    navigate(ROUTES.REGISTER)
  }, [accessToken, navigate, location.pathname])
}
