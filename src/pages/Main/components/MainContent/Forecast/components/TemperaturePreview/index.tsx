import { FC } from 'react'

interface IProps {
  tempPreview: number
}

export const TemperaturePreview: FC<IProps> = ({ tempPreview }) => (
  <div className="forecast-temperature">
    {tempPreview}
    <sup>⚬</sup>
  </div>
)
