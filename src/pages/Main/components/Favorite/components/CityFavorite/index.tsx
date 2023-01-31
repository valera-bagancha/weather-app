import { FC } from 'react'

interface IProps {
  city: string;
  changeCurrentCity: (param: string) => void
  deleteCurrentCity: (param: string) => void
}

export const CityFavorite: FC<IProps> = ({
  city,
  changeCurrentCity,
  deleteCurrentCity,
}) => {  
  const onCityDelete = () => deleteCurrentCity(city)

  const onCityChange = () => changeCurrentCity(city)

  return (
    <div className="card-cites">
      <div onClick={onCityChange}>{city}</div>
      <div className="delete-favorite-card" onClick={onCityDelete} />
    </div>
  )
}
