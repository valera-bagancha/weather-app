import { dayCard } from '../../constants/dayCard'
import { CardSwitcher } from '../CardSwitcher'

export const SwitchDay = () => {
  const switcherDayList = dayCard.map(
    ({ theDay, theDate, srcImage, maxTemperature, minTemperature }) => (
      <CardSwitcher
        key={theDay}
        theDay={theDay}
        theDate={theDate}
        srcImage={srcImage}
        maxTemperature={maxTemperature}
        minTemperature={minTemperature}
      />
    )
  )

  return <div className="days">{switcherDayList}</div>
}
