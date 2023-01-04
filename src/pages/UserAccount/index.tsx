import { useContext } from 'react'
import { CardFavoriteCites } from './components/CardFavoriteCities'
import { Header } from './components/Header'
import { ToggleSwitch } from '../../components/TogglesSwitch'
import { ThemeContext } from '../../App'



export const UserAccount = () => {
  const {isDarkMode, setIsDarkMode} = useContext(ThemeContext)

  const func = () => setIsDarkMode(!isDarkMode) 

  return (
    <div className='app-account' >
      <Header />
      <div className="container">
        <div className="greetings-user-box">
          <div>Hi,</div>
          <div className="user-name">User name</div>
        </div>
        <hr className="line" />
          <ToggleSwitch onChange={func} checked={isDarkMode}/>
        <div className="text-dark-mode">Dark/Light mode</div>
        <ToggleSwitch onChange={() => {}} checked={isDarkMode}/>
        <div className="text-dark-mode">Metric/Imperial system</div>
        <div className="favorite-cities-box">
          <div className="favorite-cities-head">List of favorite cities:</div>
          <div className="favorite-cities-list">
            <CardFavoriteCites />
          </div>
        </div>
      </div>
    </div>
  )
}
