import { FC } from 'react'

interface IProps {
  title: string
  iconValue: string
  value: string
  unit: string
}

export const Card: FC<IProps> = ({ title, iconValue, value, unit }) => {
  return (
    <div className="forecast-content-card">
      <div className="forecast-content-title">
        <span className="material-symbols-outlined">{iconValue}</span>
        {title}
      </div>
      <div className="forecast-content-value">
        {value}
        <sub>{unit}</sub>
      </div>
    </div>
  )
}
