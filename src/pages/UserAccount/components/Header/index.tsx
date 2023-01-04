import { Link } from 'react-router-dom'
import { ROUTES } from '../../../../constants/routes'

export const Header = () => {
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
      <div className="logo-account">MY ACCOUNT</div>
      <Link to={ROUTES.SIGNIN}>
        <div className="exit-account">Sign Out</div>
      </Link>
    </div>
  )
}
