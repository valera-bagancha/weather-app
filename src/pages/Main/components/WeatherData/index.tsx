import { cardsData } from '../../constants/cardsData'
import { Card } from '../Card'

export const WeatherData = () => {
  const CardsList = cardsData.map(({title, iconValue, value, unit}) => (
    <Card
      key={title}
      title={title}
      iconValue={iconValue}
      value={value}
      unit={unit}
    />
  ))
  return (
    <div className="forecast-content">
      {CardsList}
    </div>
  )
}
