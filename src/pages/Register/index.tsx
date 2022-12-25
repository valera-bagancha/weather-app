import React from 'react'
import { FooterAuth } from '../../components/FooterAuth'
import { Input } from '../../components/Input'
import { inputs } from './constants/inputs'

export const Register = () => {
  const showInputs = inputs.map(input => (
    <Input
      key={input.placeholder}
      className={input.className}
      type={input.type}
      placeholder={input.placeholder}
    />
  ))

  return (
    <div className="app">
      <div className="log-in-container">
        <h1 className="head">Register</h1>
        <form>
          {showInputs}
          <FooterAuth />
        </form>
      </div>
    </div>
  )
}
