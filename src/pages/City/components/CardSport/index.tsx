import { FC } from 'react'

interface IProps {
  stadium: string
  country: string
  tournament: string
  start: string
  match: string
  title: string
}

export const CardSport: FC<IProps> = ({
  stadium,
  country,
  tournament,
  start,
  match,
  title,
}) => {
  return (
    <div className="sport-card-box-city">
      <div className="title-box-sport">{title}</div>
      <label className="custom-checkbox-sport">
        <input className="input" type="checkbox" id="id-of-input" />
        <i className="glyphicon glyphicon-star-empty"></i>
        <i className="glyphicon glyphicon-star"></i>
      </label>
      <div className="data-box-sport">
        <div className="stadium">
          <span>Stadium:</span> {stadium}
        </div>
        <div className="country">
          <span>Country:</span> {country}
        </div>
        <div className="tournament">
          <span>Tournament:</span> {tournament}
        </div>
        <div className="start">
          <span>Start:</span> {start}
        </div>
        <div className="match">
          <span>Match:</span> {match}
        </div>
      </div>
    </div>
  )
}
