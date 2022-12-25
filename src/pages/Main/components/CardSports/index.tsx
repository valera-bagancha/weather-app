import { FC } from 'react'

interface IProps {
  title: string,
}

export const CardSports: FC<IProps> = ({title}) => {
  return (
    <div className="card-cites">
      <div>{title}</div>
      <div className="delete-favorite-card"></div>
    </div>
  )
}
