import { createContext } from 'react'

export const UnitContext = createContext({
  unit: false,
  setUnit: (mode: boolean) => {},
})