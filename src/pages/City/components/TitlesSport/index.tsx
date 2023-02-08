import { IFootball } from '../../../../types/city/sportEvents';
import { CardSport } from '../CardSport'

interface IProps {
  sportEvent: IFootball[]
}

export const TitlesSport= ({sportEvent}: IProps) => {  
  const sportList = sportEvent.map((sportEvent: IFootball) => (
    <CardSport key={sportEvent.match} sportEvent={sportEvent} />
  ))

  return <div className="sport-box">{sportList}</div>
}
