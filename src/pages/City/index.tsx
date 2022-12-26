import { Header } from '../../components/Header'

export const City = () => {
  return (
    <>
      <Header />
      <div className="content-container-city-page">
        <div className="title-city">
          <h1 className="selected-city-title">Weather in Kharkiv</h1>
          <label className="custom-checkbox">
            <input type="checkbox" id="id-of-input" />
            <i className="glyphicon glyphicon-star-empty"></i>
            <i className="glyphicon glyphicon-star"></i>
          </label>
        </div>
        <div className='forecast-box'>
          <div className='days'>


            <div className='day-card bg-color'>
              <div className='title-card'>Today</div>
              <div className='description-card'>26 december</div>
              <div className='visual-card'>
                <div className='icon-card'><img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="" /></div>
                <div className='temperature-card'>
                  <div className='max'>+1</div>
                  <div className='min'>-1</div>
                </div>
              </div>
            </div>


            <div className='day-card'>
            <div className='title-card'>Tuesday</div>
              <div className='description-card'>27 december</div>
              <div className='visual-card'>
                <div className='icon-card'><img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="" /></div>
                <div className='temperature-card'>
                  <div className='max'>+3</div>
                  <div className='min'>0</div>
                </div>
              </div>
            </div>

            <div className='day-card'>
            <div className='title-card'>Wednesday</div>
              <div className='description-card'>28 december</div>
              <div className='visual-card'>
                <div className='icon-card'><img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="" /></div>
                <div className='temperature-card'>
                  <div className='max'>+4</div>
                  <div className='min'>-2</div>
                </div>
              </div>
            </div>

          </div>
          <div className='main-forecast'>
            <div className='title-main'>
              <div className='text-title-main'>Weather Kharkiv, December 26, Monday</div>
              <div className='description-title-main'>Forecast for the next hour</div>
              <div className='temperature-icon-title-main'>
                <div className='temperature-title-main'>+1</div>
                <div className='box'>
                  <img className='icon-title-main' src="//cdn.weatherapi.com/weather/64x64/night/113.png" alt="" />
                </div>
              </div>
              <div className='feels-title-main'>Feels like 0<sup>&#186;</sup></div>
            </div>
            <div className='data-main'>
            
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
