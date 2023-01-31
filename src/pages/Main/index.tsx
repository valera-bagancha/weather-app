import { FC, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '../../constants/routes/routes'
import { MainContent } from './components/MainContent'
import { Form } from './components/Form'
import  mainDay  from '../../videos/mainDay.mp4'
import mainEvening from '../../videos/mainEvening.mp4'
import { ThemeContext } from '../../context/themeContext'

export const Main: FC = () => {
  const [value, setValue] = useState('')
  const navigate = useNavigate()
  const { isDarkMode } = useContext(ThemeContext)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  const searchForecast = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code !== 'Enter') return

    e.preventDefault()
    navigate(`${ROUTES.CITY}/${value.toLowerCase()}`)
  }

  return (
    <div className="app-main">
      <div className='intro'>
        <div className='video-box-main'>
          <video className='video-main' autoPlay muted loop src={isDarkMode? mainEvening : mainDay}></video>
        </div>
      </div>
      <div className="input-main">
        <Form
          value={value}
          setValue={setValue}
          changeHandler={changeHandler}
          searchForecast={searchForecast}
        />
      </div>
      <MainContent />
    </div>
  )
}
