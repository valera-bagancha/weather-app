import { FC } from 'react'
import { IFootball } from '../../../../../../types/city/sportEvents';

interface IProps {
  sportEvent: IFootball;
  deleteCurrentSportEvent: (param: string) => void
  changeCurrentSportEvent: (param: IFootball) => void
}

export const SportFavorite: FC<IProps> = ({
  sportEvent,
  changeCurrentSportEvent,
  deleteCurrentSportEvent,
}) => {
  const onSportEventDelete = () => {
    if (!sportEvent.match) return
    return deleteCurrentSportEvent(sportEvent.match)
  }


  const onSportEventChange = () => changeCurrentSportEvent(sportEvent)

  return (
    <div className="card-cites">
      <div onClick={onSportEventChange}>{sportEvent.match}</div>
      <div className="delete-favorite-card" onClick={onSportEventDelete}></div>
    </div>
  )
}
