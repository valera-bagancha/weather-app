import moment from 'moment'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState, createContext, useCallback } from 'react'

import { Loader } from '../../components/Loader'
import { SwitchDay } from './components/SwitchDay'
import { GeneralData } from './components/GeneralData'
import { TitlesSport } from './components/TitlesSport'
import { GeneralTemperature } from './components/GeneralTemperature'

import { delay } from '../../utils/delay'
import sportService from '../../api/SportService'
import weatherService from '../../api/WeatherService'
import yesterdayWeatherService from '../../api/YesterdayWeatherService'
import { favoriteCityDataSelector } from '../../redux/favorite/selectors'
import DayBeforeYesterdayWeatherService from '../../api/DayBeforeYesterdayWeatherService'
import {
  addFavoriteCity,
  deleteFavoriteCity,
} from '../../redux/favorite/actionCreators'
import { SaveFavoriteButton } from '../../components/SaveFavoriteButton'

export const DataContext = createContext([])

export const City = () => {
  const [forecast, setForecast] = useState<any>(null) // ICity
  const [sportEvents, setSportEvents] = useState<any>(null) // ISportEvents
  const [yesterdayDate, setYesterdayDate] = useState<any>(null) // IPastDays
  const [dayBeforeYesterdayDate, setDayBeforeYesterdayDate] =
    useState<any>(null) // IPastDays

  const [currentDay, setCurrentDay] = useState<any>(null) // number
  const [isForecastLoading, setIsForecastLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const favoritesCities = useSelector(favoriteCityDataSelector)

  const sportEventValue = sportEvents?.football || []
  const yesterdayNum = yesterdayDate?.forecast.forecastday[0] || {}
  const dayBeforeYesterdayNum =
    dayBeforeYesterdayDate?.forecast.forecastday[0] || {}
  const nextDays = forecast?.forecast.forecastday || []

  const cityName = forecast?.location?.name

  const isCurrentCityFavorite = favoritesCities.includes(cityName)

  const daysList = [dayBeforeYesterdayNum, yesterdayNum, ...nextDays]

  const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD')
  const dayBeforeYesterday = moment().subtract(2, 'days').format('YYYY-MM-DD')

  const { id } = useParams()

  const { t } = useTranslation()
  const dispatch = useDispatch()

  const addFavoriteCityHandler = useCallback(() => {
    if (isCurrentCityFavorite) {
      return dispatch(deleteFavoriteCity(cityName))
    }

    return dispatch(addFavoriteCity(cityName))
  }, [cityName, isCurrentCityFavorite])

  const changeCurrentDay = useCallback((param: any) => setCurrentDay(param), [])

  const currentDayData = daysList.find(
    (day: any) => day.date_epoch === currentDay
  )

  useEffect(() => {
    setCurrentDay(forecast?.forecast.forecastday[0].date_epoch)
  }, [forecast])

  useEffect(() => {
    if (!id) return

    setIsForecastLoading(true)

    delay(1000).then(async () => {
      try {
        const forecast = await weatherService.getForecast(id)
        const sportEvents = await sportService.getSportsEvent()
        setForecast(forecast)
        setSportEvents(sportEvents)
        setIsForecastLoading(false)
      } catch (error: any) {
        setErrorMessage(error.message)
        setIsForecastLoading(false)
      }
    })
  }, [id])

  useEffect(() => {
    if (!cityName) return
    ;(async () => {
      const yesterdayDate = await yesterdayWeatherService.getYesterday(
        cityName,
        yesterday
      )

      const dayBeforeYesterdayDate =
        await DayBeforeYesterdayWeatherService.getDayBeforeYesterday(
          cityName,
          dayBeforeYesterday
        )

      setYesterdayDate(yesterdayDate)
      setDayBeforeYesterdayDate(dayBeforeYesterdayDate)
    })()
  }, [cityName, yesterday, dayBeforeYesterday])

  return (
    <DataContext.Provider value={currentDayData?.hour || []}>
      <div className="app-city">
        {isForecastLoading ? (
          <Loader />
        ) : (
          <>
            {!errorMessage ? (
              <div className="content-container-city-page">
                <div className="title-city">
                  <h1 className="selected-city-title">
                    {t('city.weatherIn')} {cityName}
                  </h1>
                  <SaveFavoriteButton
                    checked={isCurrentCityFavorite}
                    onChange={addFavoriteCityHandler}
                  />
                </div>
                <div className="forecast-box">
                  <SwitchDay
                    daysList={daysList}
                    currentDay={currentDay}
                    changeCurrentDay={changeCurrentDay}
                  />
                  <div className="main-forecast">
                    <GeneralTemperature
                      currentDayData={currentDayData}
                      location={forecast?.location}
                    />
                    <GeneralData />
                  </div>
                </div>
                <TitlesSport sportEvent={sportEventValue} />
              </div>
            ) : (
              <h2 className="error-message-city">{errorMessage}</h2>
            )}
          </>
        )}
      </div>
    </DataContext.Provider>
  )
}
