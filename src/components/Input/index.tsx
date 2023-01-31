import { FC } from 'react'

interface IProps {
  className: string,
  type: string,
  placeholder: string
}

export const Input: FC<IProps> = ({className, type, placeholder}) => {
  return (
    <>
      <input className={className} type={type} placeholder={placeholder} />
    </>
  )
}