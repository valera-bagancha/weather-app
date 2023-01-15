import { CardSport } from '../CardSport'

export const TitlesSport = ({ sportEvent }: any) => {
  const sportList = sportEvent.map((sportEvent: any) => (
    <CardSport key={sportEvent.match} sportEvent={sportEvent} />
  ))

  return <div className="sport-box">{sportList}</div>
}
