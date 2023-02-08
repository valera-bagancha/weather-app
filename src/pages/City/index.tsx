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
import { favoriteCitiesByUserIdSelector } from '../../redux/favorite/selectors'
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
import { userIdSelector } from '../../redux/auth/selectors'
import { ICurrentCityUser } from '../../types/currentCityUser'
import { forecastBackground } from './constants/forecastBG'

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
  const favoriteCitiesByUserId = useSelector(favoriteCitiesByUserIdSelector)
  const userId = useSelector(userIdSelector)

  const sportEventValue = sportEvents?.football || []
  const yesterdayNum = yesterdayDate?.forecast.forecastday[0]
  const dayBeforeYesterdayNum = dayBeforeYesterdayDate?.forecast?.forecastday[0]
  const nextDays = forecast?.forecast.forecastday || []

  const cityName = forecast?.location?.name || ''

  const isCurrentCityFavorite = favoriteCitiesByUserId.some(
    ({ city }: ICurrentCityUser) =>
      city.toLowerCase() === cityName.toLowerCase()
  )

  const forecastCondition = (forecast: ICity | null) => {
    if (!forecast) return
    const text = forecast?.current.condition.text.toLowerCase()
    return text
      .split(' ')
      .map((word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join('')
  }
  
  const currentForecastCondition =
    forecastCondition(forecast) || forecastBackground.default

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

    if (isCurrentCityFavorite && userId) {
      return dispatch(deleteFavoriteCity(cityName, userId))
    }

    if (!userId) return null

    return dispatch(addFavoriteCity(cityName, userId))
  }, [cityName, isCurrentCityFavorite, userId])

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
      history.userId === userId
  )

  useEffect(() => {
    if (!cityName) return
    if (!isHistoryIncludes && !errorMessage && userId !== undefined) {
      dispatch(searHistory(cityName, userId))
    }
  }, [cityName, errorMessage, userId])

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
        <div className="video-box-city">
          <video
            className="video-city"
            autoPlay
            muted
            loop
            src={forecastBackground[currentForecastCondition]}
          ></video>
        </div>
        <div className='one-x-bet'>
          <img src="https://offside.by/wp-content/uploads/2020/04/1xBet-Logo.png" alt="" />
          <img src="https://offside.by/wp-content/uploads/2020/04/1xBet-Logo.png" alt="" />
        </div>
        {isForecastLoading ? (
          <Loader className='lds-ring'/>
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
