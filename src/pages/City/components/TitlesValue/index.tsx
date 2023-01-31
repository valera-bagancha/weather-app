import { useContext } from 'react'
import { DataContext } from '../..'
import { IHour } from '../../../../types/city/forecast'
import { CardTitleValue } from '../CardTitleValue'

export const TitlesValue = () => {
  const data = useContext(DataContext)
  
  const newData = data.filter((_, index) => index %2 == 0)
  
  const cardValueList = newData.map((value: IHour) => (
    <CardTitleValue key={value.time} newData={value} />
  ))

  return <div className="box-titles-values">{cardValueList}</div>
}
