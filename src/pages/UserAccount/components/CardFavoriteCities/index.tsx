import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { ListCities } from '../ListCities'
import { ROUTES } from '../../../../constants/routes/routes'
import { favoriteCityDataSelector } from '../../../../redux/favorite/selectors'
import { useCallback } from 'react'
import { deleteFavoriteCity } from '../../../../redux/favorite/actionCreators'

export const CardFavoriteCites = () => {
  const favoritesCities = useSelector(favoriteCityDataSelector)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const navigateForecast = (city: string) => {
    navigate(`${ROUTES.CITY}/${city.toLowerCase()}`)
  }

  const deleteCurrentCity = useCallback((param: string) => {
    dispatch(deleteFavoriteCity(param))
  }, [])

  return (
    <div className="favorite-cities-list">
      {favoritesCities.map((city: any) => (
        <ListCities
          key={city}
          city={city}
          navigateForecast={navigateForecast}
          deleteCurrentCity={deleteCurrentCity}
        />
      ))}
    </div>
  )
}
