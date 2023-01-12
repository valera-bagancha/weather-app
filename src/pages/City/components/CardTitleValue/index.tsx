export const CardTitleValue = ({ newData }: any) => {
    const {
      time, condition,
      temp_c, feelslike_c,
      chance_of_rain, chance_of_snow,
      precip_mm, wind_mph,
      pressure_mb, humidity,
      gust_mph, vis_km, heatindex_c,
      cloud, windchill_c
    } = newData

    const currentTime = time.slice(-5)

    return (
      <div className="card-values-forecast">
        <div className="time">{currentTime}</div>
        <div className="icon">
          <img src={condition.icon} alt="" />
        </div>
        <div className="temperature">{temp_c}</div>
        <div className="feels-like">{feelslike_c}</div>
        <div>{chance_of_rain}</div>
        <div>{chance_of_snow}</div>
        <div>{precip_mm}</div>
        <div className="pressure">{pressure_mb}</div>
        <div className="wind">{wind_mph}</div>
        <div className="humidity">
          {humidity}
          <span>%</span>
        </div>
        <div className="gust">{gust_mph}</div>
        <div className="vis">{vis_km}</div>
        <div className="heat-index">{heatindex_c}</div>
        <div className="cloud">{cloud}</div>
        <div className="windchill">{windchill_c}</div>
      </div>
    )
  }
