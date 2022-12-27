import { FC } from 'react'

interface IProps {
  children: JSX.Element,
}

export const Layout: FC<IProps> = ({children}: IProps) => {
  return (
    <div className="app">
      {children}
    </div>
  )
} 