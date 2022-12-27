export const GeneralTemperature = () => {
  return (
    <div className="title-main">
      <div className="text-title-main">
        Weather Kharkiv, December 26, Monday
      </div>
      <div className="description-title-main">Forecast for the next hour</div>
      <div className="temperature-icon-title-main">
        <div className="temperature-title-main">+1</div>
        <div className="box">
          <img
            className="icon-title-main"
            src="//cdn.weatherapi.com/weather/64x64/night/113.png"
            alt=""
          />
        </div>
      </div>
      <div className="feels-title-main">
        Feels like 0<sup>&#186;</sup>
      </div>
    </div>
  )
}
