import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useContext } from 'react'

import { isEmptyFavoriteCitiesSelector } from '../../redux/favorite/selectors'
import { CardFavoriteCites } from './components/CardFavoriteCities'
import { firstNameSelector } from '../../redux/auth/selectors'
import { ToggleSwitch } from '../../components/TogglesSwitch'
import { ThemeContext } from '../../context/themeContext'
import { UnitContext } from '../../context/unitContext'
import { Header } from './components/Header'

export const UserAccount = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext)
  const { unit, setUnit } = useContext(UnitContext)

  const isEmptyFavoriteCities = useSelector(isEmptyFavoriteCitiesSelector)
  const firstName = useSelector(firstNameSelector)

  const { t } = useTranslation()

  const themeChange = () => setIsDarkMode(!isDarkMode)
  const unitChange = () => setUnit(!unit)

  return (
    <div className="app-account">
      <Header />
      <div className="container">
        <div className="greetings-user-box">
          <div>{t('account.greetingsUser')}</div>
          <div className="user-name">{firstName}</div>
        </div>
        <hr className="line" />
        <ToggleSwitch onChange={themeChange} checked={isDarkMode} />
        <div className="text-dark-mode">{t('account.changerTheme')}</div>
        <ToggleSwitch onChange={unitChange} checked={unit} />
        <div className="text-dark-mode">{t('account.changerSystem')}</div>
        <div className="favorite-cities-box">
          <div className="favorite-cities-head">
            {t('account.favoriteCities')}
          </div>
          {isEmptyFavoriteCities ? (
            <div className="text-for-empty-favorites">{t('empty-field')}</div>
          ) : (
            <CardFavoriteCites />
          )}
        </div>
      </div>
    </div>
  )
}
