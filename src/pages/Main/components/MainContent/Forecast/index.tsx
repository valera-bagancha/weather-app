import { useTranslation } from 'react-i18next'
import { FC, useContext } from 'react'

import { ForecastContent } from './components/ForecastContent'
import { ForecastHead } from './components/ForecastHead'
import { UnitContext } from '../../../../../context/unitContext'
import { ICity } from '../../../../../types/city/forecast'

interface IProps {
  isEmpty: boolean
  currentCity: ICity | null;
}

export const Forecast: FC<IProps> = ({ isEmpty, currentCity }) => {
  const { t } = useTranslation()
  const { unit } = useContext(UnitContext)

  const current = currentCity?.current
  const location = currentCity?.location

  const day = currentCity?.forecast.forecastday[0].day
  const maxTemp = (unit ? day?.maxtemp_f : day?.maxtemp_c) || 0
  const minTemp = (unit ? day?.mintemp_f : day?.mintemp_c) || 0

  const tempPreview = Math.round(current?.temp_c || 0)
  const forecastTitle = location?.name

  return (
    <div className="forecast">
      {isEmpty ? (
        <div className="empty-main-forecast">{t('empty-field')}</div>
      ) : (
        <>
          <ForecastHead
            forecastTitle={forecastTitle!}
            tempPreview={tempPreview}
            maxTemp={maxTemp}
            minTemp={minTemp}
          />
          <ForecastContent current={current!} />
        </>
      )}
    </div>
  )
}
