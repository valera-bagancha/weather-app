import { FC, useState, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'

import WeatherService from '../../../../api/WeatherService'
import { Loader } from '../../../../components/Loader'
import { delay } from '../../../../utils/delay'
import {
  favoriteCityDataSelector,
  favoriteSportEventDataSelector,
} from '../../../../redux/favorite/selectors'
import { SportEvents } from './SportEvents'
import { Favorite } from '../Favorite'
import { Forecast } from './Forecast'

export const MainContent: FC = () => {
  const [currentCity, setCurrentCity] = useState<any>(null)
  const [currentSportEvent, setCurrentSportEvent] = useState<any>(null)

  const [isForecastMainLoading, setIsForecastMainLoading] = useState(false)
  const [isSportEventMainLoading, setIsSportEventMainLoading] = useState(false)

  const favoriteSportsEvents = useSelector(favoriteSportEventDataSelector)
  const favoriteCities = useSelector(favoriteCityDataSelector)

  const changeCurrentSportEvent = useCallback(async (param: any) => {
    setIsSportEventMainLoading(true)
    await delay(1000)

    setCurrentSportEvent(param)

    setIsSportEventMainLoading(false)
  }, [])

  const changeCurrentCity = useCallback(async (param: any) => {
    setIsForecastMainLoading(true)
    await delay(1000)

    const forecast = await WeatherService.getForecast(param)

    setCurrentCity(forecast)

    setIsForecastMainLoading(false)
  }, [])

  const isEmptyCityFavorites = !favoriteCities.length
  const isEmptySportEventFavorites = !favoriteSportsEvents.length

  useEffect(() => {
    if (isEmptyCityFavorites) return

    setIsForecastMainLoading(true)

    delay(1000).then(async () => {
      const forecast = await WeatherService.getForecast(favoriteCities[0])

      setCurrentCity(forecast)

      setIsForecastMainLoading(false)
    })
  }, [favoriteCities])

  useEffect(() => {
    if (isEmptySportEventFavorites) return

    setIsSportEventMainLoading(true)

    delay(1000).then(() => {
      setCurrentSportEvent(favoriteSportsEvents[0])

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
            currentSportEvent={currentSportEvent}
            isEmpty={isEmptySportEventFavorites}
          />
        )}
      </div>
      <Favorite
        favoriteCities={favoriteCities}
        changeCurrentCity={changeCurrentCity}
        favoriteSportsEvents={favoriteSportsEvents}
        changeCurrentSportEvent={changeCurrentSportEvent}
      />
    </div>
  )
}
