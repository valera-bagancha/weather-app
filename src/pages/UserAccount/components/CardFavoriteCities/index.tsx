import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

import { favoriteCitiesByUserIdSelector } from '../../../../redux/favorite/selectors'
import { deleteFavoriteCity } from '../../../../redux/favorite/actionCreators'
import { ROUTES } from '../../../../constants/routes/routes'
import { ListCities } from '../ListCities'
import { userIdSelector } from '../../../../redux/auth/selectors'
import { IHistory } from '../../../../types/history'


export const CardFavoriteCites = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userId = useSelector(userIdSelector)
  const favoriteCitiesByUserId = useSelector(favoriteCitiesByUserIdSelector)
  
  const navigateForecast = (city: string) => {
    navigate(`${ROUTES.CITY}/${city.toLowerCase()}`)
  }

  const deleteCurrentCity = useCallback((param: string ) => {
    if (!userId) return
    dispatch(deleteFavoriteCity(param, userId))
  }, [])
  
  return (
    <div className="favorite-cities-list">
      {favoriteCitiesByUserId.map((city: IHistory) =>(
        <ListCities
          key={city.city}
          city={city.city}
          navigateForecast={navigateForecast}
          deleteCurrentCity={deleteCurrentCity}
        /> 
      ))}
    </div>
  )
}