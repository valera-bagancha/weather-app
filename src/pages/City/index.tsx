import { useEffect, useState, createContext, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { GeneralData } from './components/GeneralData'
import { GeneralTemperature } from './components/GeneralTemperature'
import { SwitchDay } from './components/SwitchDay'

import { useParams } from 'react-router-dom'
import weatherService from '../../api/WeatherService'
import { TitlesSport } from './components/TitlesSport'
import sportService from '../../api/SportService'
import yesterdayWeatherService from '../../api/YesterdayWeatherService'
import moment from 'moment'
import DayBeforeYesterdayWeatherService from '../../api/DayBeforeYesterdayWeatherService'

export const DataContext = createContext([])

export const City = () => {
  const [forecast, setForecast] = useState<any>(null)
  const [sportEvent, setSportEvent] = useState<any>(null)
  const [yesterdayDate, setYesterdayDate] = useState<any>(null)
  const [dayBeforeYesterdayDate, setDayBeforeYesterdayDate] =
    useState<any>(null)

  const [currentDay, setCurrentDay] = useState<any>(null)

  const forecastValue = forecast?.forecast.forecastday[0].hour || {} // []
  const sportEventValue = sportEvent?.football || []
  const yesterdayNum = yesterdayDate?.forecast.forecastday[0] || {}
  const dayBeforeYesterdayNum =
    dayBeforeYesterdayDate?.forecast.forecastday[0] || {}
  const nextDays = forecast?.forecast.forecastday || []
  
  const daysList = [dayBeforeYesterdayNum, yesterdayNum, ...nextDays]

  const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD')
  const dayBeforeYesterday = moment().subtract(2, 'days').format('YYYY-MM-DD')

  const { id } = useParams()

  const changeCurrentDay = useCallback((param: any) => setCurrentDay(param), [])
  
  const currentDayData = daysList.find((day: any) => day.date_epoch === currentDay)

  // console.log('currentDayData', currentDayData);
  
  useEffect(() => {
    setCurrentDay(forecast?.forecast.forecastday[0].date_epoch)
  }, [forecast])

  useEffect(() => {
    weatherService.getForecast(id).then(forecast => setForecast(forecast))
    sportService.getSportsEvent().then(sportEvent => setSportEvent(sportEvent))
  }, [])

  useEffect(() => {
    yesterdayWeatherService
      .getYesterday(id, yesterday)
      .then(yesterdayDate => setYesterdayDate(yesterdayDate))

    DayBeforeYesterdayWeatherService.getDayBeforeYesterday(
      id,
      dayBeforeYesterday
    ).then(dayBeforeYesterdayDate =>
      setDayBeforeYesterdayDate(dayBeforeYesterdayDate)
    )
  }, [id, yesterday, dayBeforeYesterday])

  const { t } = useTranslation()

  return (
    <DataContext.Provider value={currentDayData?.hour || []}>
      <div className="app-city">
        <div className="content-container-city-page">
          <div className="title-city">
            <h1 className="selected-city-title">
              {t('city.weatherIn')} {forecast?.location.name}
            </h1>
            {/* вынести в отдельный  компонент*/}
            <label className="custom-checkbox">
              <input type="checkbox" id="id-of-input" />
              <i className="glyphicon glyphicon-star-empty"></i>
              <i className="glyphicon glyphicon-star"></i>
            </label>
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
      </div>
    </DataContext.Provider>
  )
}
