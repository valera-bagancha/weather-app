import { FC } from 'react'

export const SportFavorite: FC<any> = ({
  sportEvent,
  changeCurrentSportEvent,
  deleteCurrentSportEvent,
}) => {
  const onSportEventDelete = () => deleteCurrentSportEvent(sportEvent.match)

  const onSportEventChange = () => changeCurrentSportEvent(sportEvent)

  return (
    <div className="card-cites">
      <div onClick={onSportEventChange}>{sportEvent.match}</div>
      <div className="delete-favorite-card" onClick={onSportEventDelete}></div>
    </div>
  )
}
