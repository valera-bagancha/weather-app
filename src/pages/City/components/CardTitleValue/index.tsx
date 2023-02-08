import { UnitContext } from '../../../../context/unitContext'
import { useContext } from 'react'
import { IHour } from '../../../../types/city/forecast'

export interface IProps {
  newData: IHour
}

export const CardTitleValue = ({ newData }: IProps) => {
    const {
      time, condition,
      temp_c, feelslike_c,
      chance_of_rain, chance_of_snow,
      precip_mm, wind_mph,
      pressure_mb, humidity,
      gust_mph, vis_km, heatindex_c,
      cloud, windchill_c, temp_f,
      feelslike_f, precip_in, 
      pressure_in, wind_kph, gust_kph,
      vis_miles, windchill_f
    } = newData
    
    const { unit } = useContext(UnitContext)
    const currentTime = time.slice(-5)

    return (
      <div className="card-values-forecast">
        <div className="time">{currentTime}</div>
        <div className="icon">
          <img src={condition.icon} alt="" />
        </div>
        <div className="temperature">{unit ? temp_f : temp_c}</div>
        <div className="feels-like">{unit ? feelslike_f : feelslike_c}</div>
        <div>{chance_of_rain}</div>
        <div>{chance_of_snow}</div>
        <div>{unit ? precip_in : precip_mm}</div>
        <div className="pressure">{ unit ? pressure_in : pressure_mb}</div>
        <div className="wind">{unit ? wind_mph : wind_kph}</div>
        <div className="humidity">
          {humidity}
          <span>%</span>
        </div>
        <div className="gust">{unit ? gust_mph : gust_kph}</div>
        <div className="vis">{unit ? vis_miles : vis_km}</div>
        <div className="heat-index">{heatindex_c}</div>
        <div className="cloud">{cloud}</div>
        <div className="windchill">{unit ? windchill_f : windchill_c}</div>
      </div>
    )
  }
