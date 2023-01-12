import { createContext } from 'react'

export const MessageModalContext = createContext(
  (message: string, isError: boolean) => {}
)
