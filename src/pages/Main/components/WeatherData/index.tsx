import { cardsData } from '../../constants/cardsData'
import { Card } from '../Card'

export const WeatherData = () => {
  const CardsList = cardsData.map(({ cloud, wind, pressure, uvIndex, humidity }) => (
    <Card
      key={pressure}
      cloud={cloud}
      wind={wind}
      pressure={pressure}
      uvIndex={uvIndex}
      humidity={humidity}
      // iconValue={iconValue}
      // unit={unit}
    />
  ))
  return <div className="forecast-content">{CardsList}</div>
}
