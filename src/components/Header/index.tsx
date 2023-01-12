import cn from 'classnames'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes/routes'
import { useTranslation } from 'react-i18next'

export const Header = () => {
  // const [language, setLanguage] = useState('english')
  const {i18n} = useTranslation()

  const activeClassUa = () => {
    // setLanguage('ukrainian')
    i18n.changeLanguage('ua')
  }

  const activeClassUs = () => {
    // setLanguage('english')
    i18n.changeLanguage('en')
  }

  // const focusUs = cn({
  //   ['focus-language']: language === 'english',
  // })

  // const focusUa = cn({
  //   ['focus-language']: language === 'ukrainian',
  // })

  return (
    <header className="header">
      <div className="container-header-main-page">
        <div className="logo">
          <Link to={ROUTES.MAIN}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1214/1214753.png"
              alt="...loading"
            />
          </Link>
        </div>
        <div className="language-changer">
          <span onClick={activeClassUa}>UA</span>
          <span onClick={activeClassUs}>EN</span>
          <div className="user">
            <Link to={ROUTES.USER_ACCOUNT}>
              <span className="material-symbols-outlined">person</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
