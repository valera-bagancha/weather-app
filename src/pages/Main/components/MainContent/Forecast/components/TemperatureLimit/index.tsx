import { FC } from 'react'

interface IProps {
  title: string
  temp: number
  className: string
}

export const TemperatureLimit: FC<IProps> = ({ title, temp, className }) => (
  <div className={className}>
    {title}
    <span>
      {temp}
      <sup>⚬</sup>
    </span>
  </div>
)
