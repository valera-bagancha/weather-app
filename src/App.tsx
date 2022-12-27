import React from 'react'
import { Register } from './pages/Register'
import { SignIn } from './pages/SignIn'
import { Layout } from './layout/Layout'
import { UserAccount } from './pages/UserAccount'
import { Main } from './pages/Main'
import { City } from './pages/City'

import './styles/App.css'
import './styles/reset.css'


const App = () => {
  return (
      <Layout>
        <City/>
        {/* <Main/> */}
        {/* <UserAccount/> */}
        {/* <Register/> */}
        {/* <SignIn/> */}
      </Layout>
  )
}

export default App
