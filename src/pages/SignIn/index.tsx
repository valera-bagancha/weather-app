import React from 'react'
import { FooterAuth } from '../../components/FooterAuth'

export const SignIn = () => {
  return (
    <div className="app">
      <div className="log-in-container">
        <h1 className="head">Sign In</h1>
        <form>
          <input className="input" type="email" placeholder="Email" />
          <input className="input" type="password" placeholder="Password" />
          <FooterAuth linkName={'Register'} />
        </form>
      </div>
    </div>
  )
}
