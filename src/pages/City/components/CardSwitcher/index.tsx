import { FC } from 'react'

interface IProps {
  theDay: string
  theDate: string
  srcImage: string
  maxTemperature: string
  minTemperature: string
}

export const CardSwitcher: FC<IProps> = ({
  theDay,
  theDate,
  srcImage,
  maxTemperature,
  minTemperature,
}) => {
  return (
    <div className="day-card bg-color">
      <div className="title-card">{theDay}</div>
      <div className="description-card">{theDate}</div>
      <div className="visual-card">
        <div className="icon-card">
          <img src={srcImage} alt="" />
        </div>
        <div className="temperature-card">
          <div className="max">{maxTemperature}</div>
          <div className="min">{minTemperature}</div>
        </div>
      </div>
    </div>
  )
}
