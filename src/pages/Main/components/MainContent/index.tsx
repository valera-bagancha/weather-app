import { FC, useState, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { IFootball } from '../../../.././types/city/sportEvents'
import WeatherService from '../../../../api/WeatherService'
import { ICity } from '../../../.././types/city/forecast'
import { Loader } from '../../../../components/Loader'
import { delay } from '../../../../utils/delay'
import {
  favoriteCityDataSelector,
  favoriteSportEventDataSelector,
} from '../../../../redux/favorite/selectors'
import { SportEvents } from './SportEvents'
import { Favorite } from '../Favorite'
import { Forecast } from './Forecast'
import { userID } from '../../../../redux/auth/selectors'
import { ICurrentCityUser } from '../../../../types/currentCityUser'
import { ICurrentSportEventUser } from '../../../../types/currentSportEventUser'


export const MainContent: FC = () => {
  const [currentCity, setCurrentCity] = useState<ICity | null>(null)  
  const [currentSportEvent, setCurrentSportEvent] = useState<IFootball | null>(null)
  const [isForecastMainLoading, setIsForecastMainLoading] = useState(false)
  const [isSportEventMainLoading, setIsSportEventMainLoading] = useState(false)

  const favoriteSportsEvents = useSelector(favoriteSportEventDataSelector)
  const favoriteCities = useSelector(favoriteCityDataSelector)
  const userId = useSelector(userID)


  const changeCurrentSportEvent = useCallback(async (param: IFootball) => {
    
    setIsSportEventMainLoading(true)
    await delay(1000)

    setCurrentSportEvent(param)

    setIsSportEventMainLoading(false)
  }, [])

  const changeCurrentCity = useCallback(async (param: string) => {
    
    setIsForecastMainLoading(true)
    await delay(1000)

    const forecast = await WeatherService.getForecast(param)

    setCurrentCity(forecast)

    setIsForecastMainLoading(false)
  }, [])

  const currentCityFavorite = favoriteCities.filter((idUser: ICurrentCityUser) => userId == idUser.idUser)
  const currentSportEventFavorite = favoriteSportsEvents.filter((idUser: ICurrentSportEventUser) => userId == idUser.idUser) 

  const isEmptyCityFavorites = !currentCityFavorite.length
  const isEmptySportEventFavorites = !currentSportEventFavorite.length


  useEffect(() => {
    if (isEmptyCityFavorites) return

    setIsForecastMainLoading(true)

    delay(1000).then(async () => {
      const forecast = await WeatherService.getForecast(currentCityFavorite[0].city)

      setCurrentCity(forecast)

      setIsForecastMainLoading(false)
    })
  }, [favoriteCities])

  useEffect(() => {
    if (isEmptySportEventFavorites) return

    setIsSportEventMainLoading(true)

    delay(1000).then(() => {
      setCurrentSportEvent(currentSportEventFavorite[0].sportEvent)

      setIsSportEventMainLoading(false)
    })
  }, [favoriteSportsEvents])

  return (
    <div className="container-main-content">
      <div className="box">
        {isForecastMainLoading ? (
          <Loader />
        ) : (
          <Forecast currentCity={currentCity} isEmpty={isEmptyCityFavorites} />
        )}
        {isSportEventMainLoading ? (
          <Loader />
        ) : (
          <SportEvents
            currentSportEvent={currentSportEvent!}
            isEmpty={isEmptySportEventFavorites}
          />
        )}
      </div>
      <Favorite
        currentCityFavorite={isEmptyCityFavorites}
        currentSportEventFavorite={isEmptySportEventFavorites}
        favoriteCities={favoriteCities}
        changeCurrentCity={changeCurrentCity}
        favoriteSportsEvents={favoriteSportsEvents}
        changeCurrentSportEvent={changeCurrentSportEvent}
      />
    </div>
  )
}
