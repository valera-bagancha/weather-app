import { FC, useState, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { IFootball } from '../../../.././types/city/sportEvents'
import WeatherService from '../../../../api/WeatherService'
import { ICity } from '../../../.././types/city/forecast'
import { Loader } from '../../../../components/Loader'
import { delay } from '../../../../utils/delay'
import {
  favoriteCitiesByUserIdSelector,
  favoriteSportEventsByUserIdSelector,
  isEmptyFavoriteCitiesSelector,
  isEmptyFavoriteSportEventsSelector,
} from '../../../../redux/favorite/selectors'
import { SportEvents } from './SportEvents'
import { Favorite } from '../Favorite'
import { Forecast } from './Forecast'

export const MainContent: FC = () => {
  const [currentCity, setCurrentCity] = useState<ICity | null>(null)
  const [currentSportEvent, setCurrentSportEvent] = useState<IFootball | null>(
    null
  )
  const [isForecastMainLoading, setIsForecastMainLoading] = useState(false)
  const [isSportEventMainLoading, setIsSportEventMainLoading] = useState(false)

  const favoriteCitiesByUserId = useSelector(favoriteCitiesByUserIdSelector)
  const isEmptyFavoriteCities = useSelector(isEmptyFavoriteCitiesSelector)
  const favoriteSportEventsByUserId = useSelector(
    favoriteSportEventsByUserIdSelector
  )
  const isEmptyFavoriteSportEvents = useSelector(
    isEmptyFavoriteSportEventsSelector
  )

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

  useEffect(() => {
    if (isEmptyFavoriteCities) return

    setIsForecastMainLoading(true)

    delay(1000).then(async () => {
      const forecast = await WeatherService.getForecast(
        favoriteCitiesByUserId[0].city
      )

      setCurrentCity(forecast)

      setIsForecastMainLoading(false)
    })
  }, [favoriteCitiesByUserId, isEmptyFavoriteCities])

  useEffect(() => {
    if (isEmptyFavoriteSportEvents) return

    setIsSportEventMainLoading(true)

    delay(1000).then(() => {
      setCurrentSportEvent(favoriteSportEventsByUserId[0].sportEvent)

      setIsSportEventMainLoading(false)
    })
  }, [favoriteSportEventsByUserId, isEmptyFavoriteSportEvents])

  return (
    <div className="container-main-content">
      <div className="box">
        {isForecastMainLoading ? (
          <Loader className='color-white'/>
        ) : (
          <Forecast currentCity={currentCity} />
        )}
        {isSportEventMainLoading ? (
          <Loader className='color-white'/>
        ) : (
          <SportEvents currentSportEvent={currentSportEvent!} />
        )}
      </div>
      <Favorite
        changeCurrentCity={changeCurrentCity}
        changeCurrentSportEvent={changeCurrentSportEvent}
      />
    </div>
  )
}
