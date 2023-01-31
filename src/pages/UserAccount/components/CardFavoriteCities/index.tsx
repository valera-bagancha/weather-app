import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useCallback, useMemo } from 'react'

import { favoriteCityDataSelector } from '../../../../redux/favorite/selectors'
import { deleteFavoriteCity } from '../../../../redux/favorite/actionCreators'
import { ROUTES } from '../../../../constants/routes/routes'
import { ListCities } from '../ListCities'
import { userID } from '../../../../redux/auth/selectors'


export const CardFavoriteCites = () => {
  const favoritesCities = useSelector(favoriteCityDataSelector)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const idUser = useSelector(userID)
  
  const navigateForecast = (city: string) => {
    navigate(`${ROUTES.CITY}/${city.toLowerCase()}`)
  }

  const deleteCurrentCity = useCallback((param: string ) => {
    dispatch(deleteFavoriteCity(param, idUser))
  }, [])

  const currentFavoritesCities = favoritesCities.filter((id: any) => idUser == id.idUser)
  
  
  // const currentFavoritesCities = useMemo(() => {
  //   return favoritesCities.filter((id: any) => idUser === id.IdUser)
  // }, [idUser, favoritesCities])

  return (
    <div className="favorite-cities-list">
      {currentFavoritesCities.map((city: any) =>(
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