
import cn from 'classnames'
import { FC, useContext } from 'react'
import { UnitContext } from '../../../../context/unitContext'

interface IProps {
  date_epoch: number;
  currentDay: number | null | undefined;
  theDay: string;
  theDate: string;
  srcImage: string;
  maxTemperature: number;
  minTemperature: number;
  changeCurrentDay: (param: number) => void
  maxTemperatureF: number;
  minTemperatureF: number;
}

export const CardSwitcher: FC<IProps> = ({
  date_epoch,
  currentDay,
  theDay,
  theDate,
  srcImage,
  maxTemperature,
  minTemperature,
  changeCurrentDay,
  maxTemperatureF,
  minTemperatureF
}) => {

  const { unit } = useContext(UnitContext)

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
          <div className="max-city">{unit ? maxTemperatureF : maxTemperature}</div>
          <div className="min-city">{unit ? minTemperatureF : minTemperature}</div>
        </div>
      </div>
    </div>
  )
}
