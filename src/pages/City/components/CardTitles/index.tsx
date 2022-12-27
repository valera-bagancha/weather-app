import { FC } from 'react'

interface IProps {
  className: string | undefined
  title: string
}

export const CardTitles: FC<IProps> = ({ title, className }) => {
  return <div className={className}>{title}</div>
}
