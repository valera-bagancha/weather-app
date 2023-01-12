import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constants/routes/routes'
import { useTranslation } from 'react-i18next'

import { Favorite } from './components/Favorite'
import { MainContentForecast } from './components/MainContentForecast'

export const Main: FC = () => {
  const [value, setValue] = useState('')

  const { t } = useTranslation()

  const navigate = useNavigate()

  const searchForecast = (e: any) => {
    if (e.code === 'Enter') {
      e.preventDefault()
      navigate(`${ROUTES.CITY}/${value.toLowerCase()}`)
    }
  }

  return (
    <div className="app-main">
      <div className='input-main'>
        <form>
            <div className="input-header">
              <input
                type="text"
                placeholder={`${t('inputPlaceholder')}`}
                value={value}
                onChange={e => setValue(e.target.value)}
                onKeyDown={searchForecast}
              />
              <span className="material-symbols-outlined search-icon">
                search
              </span>
            </div>
          </form>
        </div> 
      <div className="container-main-content">
        <div className="box">
          <MainContentForecast />
        </div>
        <div className="favorite-box">
          <Favorite />
        </div>
      </div>
    </div>
  )
}
