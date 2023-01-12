import { FC } from 'react'
import { useTranslation } from 'react-i18next'
interface IProps {
  cloud: string
  wind: string
  pressure: string
  uvIndex: string
  humidity: string
}

export const Card: FC<IProps> = ({
  cloud,
  wind,
  pressure,
  uvIndex,
  humidity,
}) => {

  const { t } = useTranslation()
  
  return (
    <>
      <div className="forecast-content-card">
        <div className="icon-title">
          <span className="material-symbols-outlined">cloud</span>
          <span>{t('forecastMain.mainForecastDataCloud')}</span>
        </div>
        {cloud}
      </div>
      <div className="forecast-content-card">
        <div className="icon-title">
          <span className="material-symbols-outlined">air</span>
          <span>{t('forecastMain.mainForecastDataWind')}</span>
        </div>
        {wind}
      </div>
      <div className="forecast-content-card">
        <div className="icon-title">
          <span className="material-symbols-outlined">compress</span>
          <span>{t('forecastMain.mainForecastDataPressure')}</span>
        </div>
        {pressure}
      </div>
      <div className="forecast-content-card">
        <div className="icon-title">
          <span className="material-symbols-outlined">infrared</span>
          <span>{t('forecastMain.mainForecastDataUvIndex')}</span>
        </div>
        {uvIndex}
      </div>
      <div className="forecast-content-card">
        <div className="icon-title">
          <span className="material-symbols-outlined">humidity_mid</span>
          <span>{t('forecastMain.mainForecastDataHumidity')}</span>
        </div>
        {humidity}
      </div>
    </>
  )
}

// { title: 'Wind', value: '13', unit: 'kph', iconValue: 'air' },
// { title: 'Humidity', value: '87', unit: '%', iconValue: 'humidity_mid' },
// { title: 'Pressure', value: '29.85', unit: 'in', iconValue: 'compress' },
// { title: 'Cloud', value: '70', unit: '%', iconValue: 'cloud' },
// { title: 'UV index', value: '2', unit: 'of 10', iconValue: 'infrared' },

// <div className="forecast-content-title">
//         <span className="material-symbols-outlined">{cloud}</span>
//         {wind}
//       </div>
//       <div className="forecast-content-value">
//         {wind}
//         {/* <sub>{wind}</sub> */}
//       </div>
