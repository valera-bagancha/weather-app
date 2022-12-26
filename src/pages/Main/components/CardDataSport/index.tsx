import { FC } from 'react' 

interface IProps {
  title: string,
  value: string
}

export const CardDataSport: FC<IProps> = ({title, value}) => {
  return (
    <div className="card-event">
      <div className="title-event">{title}:</div>
      <div className="data-title">{value}</div>
    </div>
  )
}
