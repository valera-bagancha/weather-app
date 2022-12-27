import React from 'react'
import { FooterAuth } from '../../components/FooterAuth'
import { Input } from '../../components/Input'
import { inputs } from './constants/inputs'

export const Register = () => {
  const showInputs = inputs.map(({ placeholder, className, type }) => (
    <Input
      key={placeholder}
      className={className}
      type={type}
      placeholder={placeholder}
    />
  ))

  return (
    <div className="app">
      <div className="log-in-container">
        <h1 className="head">Register</h1>
        <form>
          {showInputs}
          <FooterAuth linkName={'Sign In'} />
        </form>
      </div>
    </div>
  )
}
