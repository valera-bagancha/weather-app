import { Link } from 'react-router-dom'
import { ROUTES } from '../../../../constants/routes/routes'
import { useTranslation } from 'react-i18next'

export const Header = () => {
  const { t } = useTranslation()

  return (
    <div className="my-account-head">
      <div className="logo">
        <Link to={ROUTES.MAIN}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1214/1214753.png"
            alt="...loading"
          />
        </Link>
      </div>
      <div className="logo-account">{t('account.myAccountLogo')}</div>
      <Link to={ROUTES.SIGNIN}>
        <div className="exit-account">{t('account.exitAccount')}</div>
      </Link>
    </div>
  )
}
