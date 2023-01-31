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
import { ICity, IForecastDay, IHour } from '../../types/city/forecast'
import { ISportEvents } from '../../types/city/sportEvents'
import { IPastDays } from '../../types/city/yesterdayDate'
import { historySearchCity } from '../../redux/searchHistory/selectors'
import { searHistory } from '../../redux/searchHistory/actionCreators'
import { IError } from '../../types/errorType'
import { userID } from '../../redux/auth/selectors'
import { ICurrentCityUser } from '../../types/currentCityUser'

export const DataContext = createContext([] as IHour[])

export const City = () => {
  const [forecast, setForecast] = useState<ICity | null>(null)
  const [sportEvents, setSportEvents] = useState<ISportEvents | null>(null)
  const [yesterdayDate, setYesterdayDate] = useState<IPastDays | null>(null)
  const [dayBeforeYesterdayDate, setDayBeforeYesterdayDate] =
    useState<IPastDays | null>(null)

  const [currentDay, setCurrentDay] = useState<number | null | undefined>(null)
  const [isForecastLoading, setIsForecastLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const favoritesCities = useSelector(favoriteCityDataSelector)
  const idUser = useSelector(userID)

    const sportEventValue = sportEvents?.football || []
  const yesterdayNum = yesterdayDate?.forecast.forecastday[0]
  const dayBeforeYesterdayNum = dayBeforeYesterdayDate?.forecast?.forecastday[0]
  const nextDays = forecast?.forecast.forecastday || []

  const cityName = forecast?.location?.name || ''
  const currentCityFavorite = favoritesCities.filter(
    (id: ICurrentCityUser) => idUser == id.idUser)

  const isCurrentCityFavorite = currentCityFavorite.some(
    ({ city }: ICurrentCityUser) => city.toLowerCase() === cityName.toLowerCase())

  const daysList: IForecastDay[] =
    !dayBeforeYesterdayNum || !yesterdayNum
      ? []
      : [dayBeforeYesterdayNum, yesterdayNum, ...nextDays]

  const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD')
  const dayBeforeYesterday = moment().subtract(2, 'days').format('YYYY-MM-DD')

  const { id } = useParams()

  const { t } = useTranslation()
  const dispatch = useDispatch()
  const history = useSelector(historySearchCity)

  const addFavoriteCityHandler = useCallback(() => {
    if (!cityName) return null

    if (isCurrentCityFavorite) {
      return dispatch(deleteFavoriteCity(cityName, idUser))
    }

    return dispatch(addFavoriteCity(cityName, idUser))
  }, [cityName, isCurrentCityFavorite, idUser])

  const changeCurrentDay = useCallback(
    (param: number) => setCurrentDay(param),
    []
  )

  const currentDayData = daysList.find(
    (day: IForecastDay) => day.date_epoch === currentDay
  )

  const isHistoryIncludes = history.some(
    (history: ICurrentCityUser) => 
      history.city.toLowerCase() === cityName.toLowerCase() &&
      history.idUser === idUser
  )


  useEffect(() => {
    if (!cityName) return
    if (!isHistoryIncludes && !errorMessage && idUser !== undefined) {
      dispatch(searHistory(cityName, idUser))
    }
  }, [cityName, errorMessage, idUser])

  // useEffect(() => {
  //   if (!cityName) return
  //   if (!history.city.includes(cityName) && !errorMessage && idUser !== undefined) {
  //     dispatch(searHistory(cityName, idUser))
  //   }
  // }, [cityName, errorMessage, idUser])

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
        if (!sportEvents) return
        setSportEvents(sportEvents)
        setIsForecastLoading(false)
      } catch (error) {
        const typedError = error as IError
        setErrorMessage(typedError.message)
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

      if (!yesterdayDate || !dayBeforeYesterdayDate) return

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
                    className={'custom-checkbox'}
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
                      currentDayData={currentDayData!}
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
