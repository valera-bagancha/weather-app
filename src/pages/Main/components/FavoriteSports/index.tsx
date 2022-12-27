import { cardSportData } from '../../constants/cardSportData'
import { CardDataSport } from '../CardDataSport'

export const FavoriteSports = () => {
  const ListCard = cardSportData.map(({ title, value }) => (
    <CardDataSport key={title} title={title} value={value} />
  ))

  return (
    <div className="sport-event">
      <div className="title-kind-sports">Football</div>
      <div className="data-of-event">{ListCard}</div>
    </div>
  )
}
