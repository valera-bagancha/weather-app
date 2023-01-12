import { FC } from 'react'
import { useTranslation } from 'react-i18next'
export interface IProps {
  stadium: string
  country: string
  tournament: string
  start: string
  match: string
}

export const CardSport: FC<IProps> = ({stadium, country, tournament, start, match}) => {

  const { t } = useTranslation()

  return (
    <div className="sport-card-box-city">
      <div className="title-box-sport">{t('sportEvent.mainSportEventTitle')}</div>
      <label className="custom-checkbox-sport">
        <input className="input" type="checkbox" id="id-of-input" />
        <i className="glyphicon glyphicon-star-empty"></i>
        <i className="glyphicon glyphicon-star"></i>
      </label>
      <div className="data-box-sport">
        <div className="stadium">
          <span>{t('sportEvent.mainSportEventDataStadium')}:</span> {stadium}
        </div>
        <div className="country">
          <span>{t('sportEvent.mainSportEventDataCountry')}:</span> {country}
        </div>
        <div className="tournament">
          <span>{t('sportEvent.mainSportEventDataTournament')}:</span> {tournament}
        </div>
        <div className="start">
          <span>{t('sportEvent.mainSportEventDataStart')}:</span> {start}
        </div>
        <div className="match">
          <span>{t('sportEvent.mainSportEventDataMatch')}:</span> {match}
        </div>
      </div>
    </div>
  )
}
