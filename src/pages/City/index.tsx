import { Header } from '../../components/Header'
import { GeneralData } from './components/GeneralData'
import { GeneralTemperature } from './components/GeneralTemperature'
import { SwitchDay } from './components/SwitchDay'

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
        <div className="forecast-box">
          <SwitchDay />
          <div className="main-forecast">
            <GeneralTemperature />
            <GeneralData />
          </div>
        </div>
      </div>
    </>
  )
}
