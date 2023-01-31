import { FC } from 'react'

export interface IProps {
  city: string;
  navigateForecast: (city: string) => void;
  deleteCurrentCity: (city: string) => void
}

export const ListCities: FC<IProps> = ({city, navigateForecast, deleteCurrentCity}) => {
  
  return (
    <div className="city-card">
      <div onClick={() => {navigateForecast(city)}}>{city}</div>
      <div className="delete-card" onClick={() => {deleteCurrentCity(city)}}></div>
    </div>
  )
}