import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constants/routes';
import { useState} from 'react'
export const Header = () => {

  const [value, setValue] = useState('')

  const navigate = useNavigate()

  const func = (e: any) => {
    if (e.code === 'Enter') {
      navigate(`${ROUTES.CITY}/${value}`)
    }
  };

  return (
    <header className='head-main-page'>
      <div className='container-header-main-page'>
        <div className='logo'><img src="https://cdn-icons-png.flaticon.com/512/1214/1214753.png" alt="...loading" /></div>
        <form>
          <div className='input-header'>
            <input placeholder='Search City' value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={func} />
            <span className="material-symbols-outlined search-icon">search</span>
          </div>
        </form>
        <div className='language-changer'>Language</div>
      </div>
    </header>
  )
}