import { cardSport } from '../../constants/cardSport'
import { CardSport } from '../CardSport'

export const TitlesSport = () => {
  const sportList = cardSport.map(
    ({ stadium, country, tournament, start, match, title }) => (
      <CardSport
        key={match}
        stadium={stadium}
        country={country}
        tournament={tournament}
        start={start}
        match={match}
        title={title}
      />
    )
  )
  return <div className="sport-box">{sportList}</div>
}
