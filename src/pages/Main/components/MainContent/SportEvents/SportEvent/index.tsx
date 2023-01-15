import { FC } from 'react'

interface IProps {
  title: string
  value: string
}

export const SportEvent: FC<IProps> = ({ title, value }) => (
  <div className="title-event">
    <span>{title}:</span>
    {value}
  </div>
)
