import { PersistGate } from 'redux-persist/integration/react'
import { useState, FC } from 'react'
import { Provider } from 'react-redux'
import cn from 'classnames'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'

import { MessageModal } from './components/MessageModal'
import { store, persistor } from './redux/store'
import { Layout } from './Layout'

import './styles/main.scss'
import { ThemeContext } from './context/themeContext'
import { MessageModalContext } from './context/messageModalContext'

export const App: FC = () => {
  const defaultValue = { message: '', showModal: false, isError: false }

  const [isDarkMode, setIsDarkMode] = useState(false)
  const [modalData, setModalData] = useState(defaultValue)

  const hideModal = () => setModalData(defaultValue)

  const openModal = (message: string, isError: boolean) =>
    setModalData({ message, isError, showModal: true })

  const changeTheme = (mode: boolean) => setIsDarkMode(mode)

  const themeStyles = cn({
    ['theme-dark']: isDarkMode,
    ['theme-light']: !isDarkMode,
  })

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MessageModalContext.Provider value={openModal}>
          <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode: changeTheme }}>
            <I18nextProvider i18n={i18n}>
              <div className={themeStyles}>
                {modalData.showModal && (
                  <MessageModal
                    message={modalData.message}
                    hideModal={hideModal}
                    isError
                  />
                )}
                <Layout />
              </div>
            </I18nextProvider>
          </ThemeContext.Provider>
        </MessageModalContext.Provider>
      </PersistGate>
    </Provider>
  )
}
