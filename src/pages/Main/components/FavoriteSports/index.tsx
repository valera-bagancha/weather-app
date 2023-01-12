import { useTranslation } from 'react-i18next'

import { cardSportData } from '../../constants/cardSportData'
import { CardDataSport } from '../CardDataSport'

export const FavoriteSports = () => {
  const ListCard = cardSportData.map(
    ({ stadium, country, tournament, start, match }) => (
      <CardDataSport
        key={match}
        stadium={stadium}
        country={country}
        tournament={tournament}
        start={start}
        match={match}
      />
    )
  )

  const { t } = useTranslation()

  return (
    <div className="sport-event">
      <div className="title-kind-sports">
        {t('sportEvent.mainSportEventTitle')}
      </div>
      <div className="data-of-event">{ListCard}</div>
    </div>
  )
}
