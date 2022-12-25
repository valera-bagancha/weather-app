import { CardFavoriteCites } from './components/CardFavoriteCities'
import { Header } from './components/Header'
import { ToggleSwitch } from '../../components/TogglesSwitch'

export const UserAccount = () => {
  return (
    <>
      <Header/>
      <div className='container'>
        <div className='greetings-user-box'>
          <div>Hi,</div>
          <div className='user-name'>User name</div>
        </div>
        <hr className='line'/>
        <ToggleSwitch/>
        <div className='text-dark-mode'>Dark/Light mode</div>
        <ToggleSwitch/>
        <div className='text-dark-mode'>Metric/Imperial system</div>
        <div className='favorite-cities-box'>
          <div className='favorite-cities-head'>List of favorite cities:</div>
          <div className='favorite-cities-list'>
            <CardFavoriteCites/>
          </div>
        </div>
      </div>
    </>
  )
}