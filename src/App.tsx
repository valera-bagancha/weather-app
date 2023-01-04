import { RouterProvider } from 'react-router-dom';
import { createContext, useState } from 'react'
import { router } from './routes'

import './styles/reset.css'
import './styles/pages/userAccount.css'
import './styles/pages/main.css'
import './styles/pages/city.css'
import './styles/main.scss'
import { Provider } from 'react-redux';
import { store } from './redux/store';


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
    <Provider store={store}>
      <ThemeContext.Provider value={{isDarkMode, setIsDarkMode: func}}>
        <div className={`theme-${isDarkMode ? 'dark': 'light'}`}>
        <RouterProvider router={router} />
        </div>
      </ThemeContext.Provider>
    </Provider>
  )
}

