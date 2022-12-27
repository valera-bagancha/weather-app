import { Favorite } from './components/Favorite'
import { Header } from '../../components/Header'
import { MainContentForecast } from './components/MainContentForecast'

export const Main = () => {
  return (
    <div className='app-main'>
      <Header />
      <div className="container-main-content">
        <div className="box">
          <MainContentForecast />
        </div>
        <div className="favorite-box">
          <Favorite />
        </div>
      </div>
    </div>
  )
}
