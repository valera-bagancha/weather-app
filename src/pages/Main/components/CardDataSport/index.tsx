import { FC } from 'react'
import { useTranslation } from 'react-i18next'
interface IProps {
  stadium: string
  country: string
  tournament: string
  start: string
  match: string
}

export const CardDataSport: FC<IProps> = ({
  stadium,
  country,
  tournament,
  start,
  match,
}) => {
  const { t } = useTranslation()

  return (
    <div className="card-event">
      <div className="title-event">
        <span>{t('sportEvent.mainSportEventDataStadium')}:</span> {stadium}
      </div>
      <div className="title-event">
        <span>{t('sportEvent.mainSportEventDataCountry')}:</span> {country}
      </div>
      <div className="title-event">
        <span>{t('sportEvent.mainSportEventDataTournament')}:</span>
        {tournament}
      </div>
      <div className="title-event">
        <span>{t('sportEvent.mainSportEventDataStart')}:</span> {start}
      </div>
      <div className="title-event">
        <span>{t('sportEvent.mainSportEventDataMatch')}:</span> {match}
      </div>

    </div>
  )
}
