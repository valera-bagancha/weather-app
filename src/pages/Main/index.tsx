import { Favorite } from './components/Favorite'
import { Header } from './components/Header'
import { MainContentForecast } from './components/MainContentForecast'
import { WeatherData } from './components/WeatherData'

export const Main = () => {
  return (
    <>
      <Header />
      <div className="container-main-content">
        <div className="box">
            <MainContentForecast/>
        </div>
        <div className="favorite-box">
          <Favorite/>
        </div>
      </div>
    </>
  )
}
