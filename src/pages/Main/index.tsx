import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '../../constants/routes/routes'
import { MainContent } from './components/MainContent'
import { Form } from './components/Form'

export const Main: FC = () => {
  const [value, setValue] = useState('')

  const navigate = useNavigate()

  const changeHandler = (e: any) => setValue(e.target.value)

  const searchForecast = (e: any) => {
    if (e.code !== 'Enter') return

    e.preventDefault()
    navigate(`${ROUTES.CITY}/${value.toLowerCase()}`)
  }

  return (
    <div className="app-main">
      <div className="input-main">
        <Form
          value={value}
          changeHandler={changeHandler}
          searchForecast={searchForecast}
        />
      </div>
      <MainContent />
    </div>
  )
}
