import moment from 'moment'
import { FC } from 'react'

import { CardSwitcher } from '../CardSwitcher'
import { IDaysList } from '../../../../types/city/daysList'

interface IProps {
  daysList: IDaysList[]; 
  currentDay: number | null | undefined;
  changeCurrentDay: (param: number) => void;
}

export const SwitchDay: FC<IProps> = ({daysList, currentDay, changeCurrentDay}) => {
  
  const switcherDayList = daysList.map(
    (dayCard: IDaysList, index: number) => (
      <CardSwitcher
        key={dayCard?.date_epoch || index}
        theDay={moment(dayCard?.date).format('dddd') || ''}
        date_epoch={dayCard.date_epoch || 0}
        theDate={dayCard?.date || ''}
        currentDay={currentDay || 0}
        srcImage={dayCard?.day?.condition?.icon || ''}
        maxTemperature={dayCard?.day?.maxtemp_c || 0}
        maxTemperatureF={dayCard?.day?.maxtemp_f || 0}
        minTemperature={dayCard?.day?.mintemp_c || 0}
        minTemperatureF={dayCard?.day?.mintemp_f || 0}
        changeCurrentDay={changeCurrentDay || 0}
      />
    ))

  return <div className="days">{switcherDayList}</div>
}
