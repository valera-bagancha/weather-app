import moment from 'moment'
import { FC } from 'react'

import { CardSwitcher } from '../CardSwitcher'
import { IDaysList } from '../../../../types/city/daysList'
import { IForecastDay } from '../../../../types/city/forecast';

interface IProps {
  daysList: IDaysList;
  currentDay: number | null | undefined;
  changeCurrentDay: (param: number) => void;
}

export const SwitchDay: FC<IProps> = ({daysList, currentDay, changeCurrentDay}) => {
  
  const switcherDayList = daysList.map(
    (dayCard: IForecastDay, index: number) => (
      <CardSwitcher
        key={dayCard?.date_epoch || index}
        theDay={moment(dayCard?.date).format('dddd')}
        date_epoch={dayCard.date_epoch}
        theDate={dayCard?.date}
        currentDay={currentDay}
        srcImage={dayCard?.day?.condition?.icon}
        maxTemperature={dayCard?.day?.maxtemp_c}
        maxTemperatureF={dayCard?.day?.maxtemp_f}
        minTemperature={dayCard?.day?.mintemp_c}
        minTemperatureF={dayCard?.day?.mintemp_f}
        changeCurrentDay={changeCurrentDay}
      />
    ))

  

  return <div className="days">{switcherDayList}</div>
}
