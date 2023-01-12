
import cn from 'classnames'
import { FC } from 'react'

// interface IProps {
//   theDay: string
//   theDate: string
//   srcImage: string
//   maxTemperature: string
//   minTemperature: string
// }

export const CardSwitcher = ({
  date_epoch,
  currentDay,
  theDay,
  theDate,
  srcImage,
  maxTemperature,
  minTemperature,
  changeCurrentDay,
}: any) => {
  return (
    <div
      className={cn('day-card', {
        ['bg-color ']: currentDay === date_epoch,
        ['bg-color-dark']: currentDay === date_epoch,
      })}
      onClick={() => changeCurrentDay(date_epoch)}
    >
      <div className="title-card">{theDay}</div>
      <div className="description-card">{theDate}</div>
      <div className="visual-card">
        <div className="icon-card">
          <img src={srcImage} alt="" />
        </div>
        <div className="temperature-card">
          <div className="max-city">{maxTemperature}</div>
          <div className="min-city">{minTemperature}</div>
        </div>
      </div>
    </div>
  )
}
