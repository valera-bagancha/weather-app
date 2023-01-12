import { CardSwitcher } from '../CardSwitcher'
import moment from 'moment'
import cn from 'classnames'

export const SwitchDay = ({daysList, currentDay, changeCurrentDay}: any) => {

  const switcherDayList = daysList.map(
    (dayCard: any, index: number) => (
      <CardSwitcher
        key={dayCard?.date_epoch || index}
        theDay={moment(dayCard?.date).format('dddd')}
        date_epoch={dayCard.date_epoch}
        theDate={dayCard?.date}
        currentDay={currentDay}
        srcImage={dayCard?.day?.condition?.icon}
        maxTemperature={dayCard?.day?.maxtemp_c}
        minTemperature={dayCard?.day?.mintemp_c}
        changeCurrentDay={changeCurrentDay}
      />
    )
  )

  return <div className="days">{switcherDayList}</div>
}
