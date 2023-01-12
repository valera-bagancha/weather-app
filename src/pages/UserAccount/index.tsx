import { useContext } from 'react'
import { CardFavoriteCites } from './components/CardFavoriteCities'
import { Header } from './components/Header'
import { ToggleSwitch } from '../../components/TogglesSwitch'
import { ThemeContext } from '../../context/themeContext'
import { useSelector } from 'react-redux'
import { firstNameSelector } from '../../redux/auth/selectors'
import { useTranslation } from 'react-i18next'



export const UserAccount = () => {
  const {isDarkMode, setIsDarkMode} = useContext(ThemeContext)

  const { t } = useTranslation()

  const firstName = useSelector(firstNameSelector)

  const themeChange = () => setIsDarkMode(!isDarkMode) 

  return (
    <div className='app-account' >
      <Header />
      <div className="container">
        <div className="greetings-user-box">
          <div>{t('account.greetingsUser')}</div>
          <div className="user-name">{firstName}</div>
        </div>
        <hr className="line" />
          <ToggleSwitch onChange={themeChange} checked={isDarkMode}/>
        <div className="text-dark-mode">{t('account.changerTheme')}</div>
        <ToggleSwitch onChange={() => {}} checked={isDarkMode}/>
        <div className="text-dark-mode">{t('account.changerSystem')}</div>
        <div className="favorite-cities-box">
          <div className="favorite-cities-head">{t('account.favoriteCities')}</div>
          <div className="favorite-cities-list">
            <CardFavoriteCites />
          </div>
        </div>
      </div>
    </div>
  )
}
