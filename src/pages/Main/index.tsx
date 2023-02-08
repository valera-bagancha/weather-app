import { FC, useContext } from 'react'

import { MainContent } from './components/MainContent'
import { Form } from './components/Form'
import  mainDay  from '../../videos/mainDay.mp4'
import mainEvening from '../../videos/mainEvening.mp4'
import { ThemeContext } from '../../context/themeContext'

export const Main: FC = () => {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <div className="app-main">
        <div className='video-box-main'>
          <video className='video-main' autoPlay muted loop src={isDarkMode? mainEvening : mainDay}></video>
        </div>
      <div className="input-main">
        <Form/>
      </div>
      <MainContent />
    </div>
  )
}