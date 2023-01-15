import { FC } from 'react'

export const CityFavorite: FC<any> = ({
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
