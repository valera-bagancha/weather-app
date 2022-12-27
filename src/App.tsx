import './styles/reset.css'
import './styles/pages/auth.css'
import './styles/pages/userAccount.css'
import './styles/pages/main.css'
import './styles/pages/city.css'

import { Register } from './pages/Register'
import { SignIn } from './pages/SignIn'
import { UserAccount } from './pages/UserAccount'
import { Main } from './pages/Main'
import { City } from './pages/City'

const App = () => {
  return (
    <>
      <City />
      {/* <Main/> */}
      {/* <UserAccount/> */}
      {/* <Register/> */}
      {/* <SignIn/> */}
    </>
  )
}

export default App
