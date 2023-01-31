import { IFootball } from '../../../../types/city/sportEvents';
import { CardSport } from '../CardSport'

export const TitlesSport= ({ sportEvent }: IFootball) => {  
  const sportList = sportEvent.map((sportEvent: IFootball) => (
    <CardSport key={sportEvent.match} sportEvent={sportEvent} />
  ))

  return <div className="sport-box">{sportList}</div>
}
