import React from 'react'
import { Register } from './pages/Register'
import { SignIn } from './pages/SignIn'
import { Layout } from './layout/Layout'

import './styles/App.css'
import './styles/reset.css'
import { UserAccount } from './pages/UserAccount'
import { Main } from './pages/Main'


const App = () => {
  return (
      <Layout>
        <Main/>
        {/* <UserAccount/> */}
        {/* <Register/> */}
        {/* <SignIn/> */}
      </Layout>
  )
}

export default App
