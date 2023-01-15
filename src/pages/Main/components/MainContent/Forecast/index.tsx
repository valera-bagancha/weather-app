import { useTranslation } from 'react-i18next'
import { FC } from 'react'

import { ForecastContent } from './components/ForecastContent'
import { ForecastHead } from './components/ForecastHead'

interface IProps {
  isEmpty: boolean
  currentCity: any
}

export const Forecast: FC<IProps> = ({ isEmpty, currentCity }) => {
  const { t } = useTranslation()

  const current = currentCity?.current
  const location = currentCity?.location

  const day = currentCity?.forecast.forecastday[0].day
  const maxTemp = day?.maxtemp_c || 0
  const minTemp = day?.mintemp_c || 0

  const tempPreview = Math.round(current?.temp_c || 0)
  const forecastTitle = location?.name

  return (
    <div className="forecast">
      {isEmpty ? (
        <div className="empty-main-forecast">{t('empty-field')}</div>
      ) : (
        <>
          <ForecastHead
            forecastTitle={forecastTitle}
            tempPreview={tempPreview}
            maxTemp={maxTemp}
            minTemp={minTemp}
          />
          <ForecastContent current={current} />
        </>
      )}
    </div>
  )
}
