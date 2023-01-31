import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { ROUTES } from '../../../../constants/routes/routes'
import { signOut } from '../../../../redux/auth/actionCreators'


export const Header = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const signOutUser = () => {
    dispatch(signOut())
    navigate(ROUTES.SIGNIN)
  }

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
      <div className="exit-account" onClick={signOutUser}>{t('account.exitAccount')}</div>
    </div>
  )
}
