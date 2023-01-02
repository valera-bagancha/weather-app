import React, { useState } from 'react'
import { FooterAuth } from '../../components/FooterAuth'

export const SignIn = () => {

  return (
    <div className="app-auth">
      <div className="log-in-container">
        <h1 className="head">Sign In</h1>
        <form>
          <input className="input" placeholder="Email" />
          <input className="input" placeholder="Password" />
          <FooterAuth linkName={'Register'} />
        </form>
      </div>
    </div>
  )
}
