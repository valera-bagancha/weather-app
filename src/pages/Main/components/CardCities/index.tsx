import { FC } from 'react'

interface IProps {
  city: string
}

export const CardCities: FC<IProps> = ({ city }) => {
  return (
    <div className="card-cites">
      <div>{city}</div>
      <div className="delete-favorite-card"></div>
    </div>
  )
}
