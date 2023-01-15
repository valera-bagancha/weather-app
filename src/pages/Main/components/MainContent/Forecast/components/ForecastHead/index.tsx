import { FC } from 'react'

import { TemperatureLimit } from '../TemperatureLimit'
import { TemperaturePreview } from '../TemperaturePreview'

interface IProps {
  tempPreview: number
  forecastTitle: string
  minTemp: number
  maxTemp: number
}

export const ForecastHead: FC<IProps> = ({
  tempPreview,
  forecastTitle,
  minTemp,
  maxTemp,
}) => (
  <div className="forecast-head">
    <TemperaturePreview tempPreview={tempPreview} />
    <div className="forecast-title">{forecastTitle}</div>
    <div className="temperature-max-min">
      <TemperatureLimit title="Min" temp={minTemp} className="min" />
      <TemperatureLimit title="Max" temp={maxTemp} className="max" />
    </div>
  </div>
)
