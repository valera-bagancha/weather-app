import { cardSport } from '../../constants/cardSport'
import { CardSport } from '../CardSport'

export const TitlesSport = ({ sportEvent }: any) => {
  const sportList = sportEvent.map(
    ({ match, stadium, country, tournament, start }: any) => (
      <CardSport
        key={match}
        stadium={stadium}
        country={country}
        tournament={tournament}
        start={start}
        match={match}
      />
    )
  )
  return <div className="sport-box">{sportList}</div>
}