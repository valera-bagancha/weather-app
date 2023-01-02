import { RouterProvider } from 'react-router-dom';
import { createContext, useContext, useState } from 'react'
import { router } from './routes'

import './styles/reset.css'
import './styles/pages/auth.css'
import './styles/pages/userAccount.css'
import './styles/pages/main.css'
import './styles/pages/city.css'
import './styles/style.scss'


export const ThemeContext = createContext({
  isDarkMode: false,
  setIsDarkMode: (mode: boolean) => {},
});

export const App = () => { 
  const [isDarkMode, setIsDarkMode] = useState(false)

  const func = (mode: boolean) => {
    setIsDarkMode(mode)
  }

  console.log(isDarkMode);
  

  return (
    <ThemeContext.Provider value={{isDarkMode, setIsDarkMode: func}}>
      <div className={`theme-${isDarkMode ? 'dark': 'light'}`}>
      <RouterProvider router={router} />
      </div>
    </ThemeContext.Provider>
  )
}

