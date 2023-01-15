import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../../constants/routes/routes'

// export interface IProps {
//   city: string
// }

export const ListCities = ({city, navigateForecast, deleteCurrentCity}: any) => {

  return (
    <div className="city-card">
      <div onClick={() => {navigateForecast(city)}}>{city}</div>
      <div className="delete-card" onClick={() => {deleteCurrentCity(city)}}></div>
    </div>
  )
}