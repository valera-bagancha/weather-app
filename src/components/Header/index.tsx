import { useNavigate, Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import { useState } from 'react'

export const Header = () => {
  const [value, setValue] = useState('')

  const navigate = useNavigate()

  const func = (e: any) => {
    if (e.code === 'Enter') {
      navigate(`${ROUTES.CITY}/${value}`)
    }
  }

  return (
    <header className="head-main-page">
      <div className="container-header-main-page">
        <div className="logo">
          <Link to={ROUTES.MAIN}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1214/1214753.png"
              alt="...loading"
            />
          </Link>
        </div>
        <form>
          <div className="input-header">
            <input
              placeholder="Search City"
              value={value}
              onChange={e => setValue(e.target.value)}
              onKeyDown={func}
            />
            <span className="material-symbols-outlined search-icon">
              search
            </span>
          </div>
        </form>
        <div className="language-changer">
          <span>UA</span>
          <span>EN</span>
          <div className='user'>
            <Link to={ROUTES.USER_ACCOUNT}>
              <span className="material-symbols-outlined">person</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
