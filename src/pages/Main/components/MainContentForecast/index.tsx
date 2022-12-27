import { FavoriteSports } from '../FavoriteSports'
import { WeatherData } from '../WeatherData'

export const MainContentForecast = () => {
  return (
    <>
      <div className="forecast">
        <div className="forecast-head">
          <div className="forecast-temperature">
            -3<sup>⚬</sup>
          </div>
          <div className="forecast-title">Kharkiv</div>
          <div className="temperature-max-min">
            <div className="min">
              Min
              <span>
                -3<sup>⚬</sup>
              </span>
            </div>
            <div className="max">
              Max
              <span>
                1<sup>⚬</sup>
              </span>
            </div>
          </div>
        </div>
        <WeatherData />
      </div>
      <FavoriteSports />
    </>
  )
}
