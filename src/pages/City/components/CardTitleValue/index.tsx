import { FC } from 'react'

interface IProps {
  time: string
  srcIcon: string
  temperature: string
  feelsLike: string
  chanceOfRain: string
  chanceOfSnow: string
  precipi: string
  pressure: string
  cloud: string
  wind: string
  humidity: string
  uvIndex: string
  gust: string
  vis: string
  heatIndex: string
  windchill: string
}

export const CardTitleValue: FC<IProps> = ({
  time,
  srcIcon,
  temperature,
  feelsLike,
  chanceOfRain,
  chanceOfSnow,
  precipi,
  pressure,
  cloud,
  wind,
  humidity,
  uvIndex,
  gust,
  vis,
  heatIndex,
  windchill,
}) => {
  return (
    <div className="card-values-forecast">
      <div className="time">{time}</div>
      <div className="icon">
        <img src={srcIcon} alt="" />
      </div>
      <div className="temperature">{temperature}</div>
      <div className="feels-like">{feelsLike}</div>
      <div className="chance-of-rain">{chanceOfRain}</div>
      <div className="chance-of-snow">{chanceOfSnow}</div>
      <div className="precipi">{precipi}</div>
      <div className="pressure">{pressure}</div>
      <div className="wind">{wind}</div>
      <div className="humidity">
        {humidity}
        <span>%</span>
      </div>
      <div className="uv-index">{uvIndex}</div>
      <div className="gust">{gust}</div>
      <div className="vis">{vis}</div>
      <div className="heat-index">{heatIndex}</div>
      <div className="cloud">{cloud}</div>
      <div className="windchill">{windchill}</div>
    </div>
  )
}
