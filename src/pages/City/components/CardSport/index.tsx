import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { SaveFavoriteButton } from '../../../../components/SaveFavoriteButton'

import { addFavoriteSportEvent, deleteFavoriteSportEvent } from '../../../../redux/favorite/actionCreators'
import { favoriteSportEventDataSelector } from '../../../../redux/favorite/selectors'
export interface IProps {
  sportEvent: {
    stadium: string
    country: string
    tournament: string
    start: string
    match: string
  }
}

export const CardSport: FC<IProps> = ({ sportEvent }: any) => {
  const { stadium, country, tournament, start, match } = sportEvent

  const favoriteSportEvents = useSelector(favoriteSportEventDataSelector)

  const dispatch = useDispatch()

  const addFavoriteSportEventHandler = () => {
    if (checked) {
      return dispatch(deleteFavoriteSportEvent(match))
    }

    return dispatch(addFavoriteSportEvent(sportEvent))
  }

  const { t } = useTranslation()

  const checked = favoriteSportEvents.some(
    (sportEvent: any) => sportEvent.match === match
  )

  return (
    <div className="sport-card-box-city">
      <div className="title-box-sport">
        {t('sportEvent.mainSportEventTitle')}
      </div>
      {/* <label className="custom-checkbox-sport">
        <input
          className="input"
          type="checkbox"
          id="id-of-input"
          checked={checked}
          onChange={addFavoriteSportEventHandler}
        />
        <i className="glyphicon glyphicon-star-empty"></i>
        <i className="glyphicon glyphicon-star"></i>
      </label> */}
      <SaveFavoriteButton checked={checked} onChange={addFavoriteSportEventHandler} /> {/* className={"custom-checkbox-sport"} ????*/}
      <div className="data-box-sport">
        <div className="stadium">
          <span>Stadium:</span> {stadium}
        </div>
        <div className="country">
          <span>Country:</span> {country}
        </div>
        <div className="tournament">
          <span>Tournament:</span>{' '}
          {tournament}
        </div>
        <div className="start">
          <span>Start:</span> {start}
        </div>
        <div className="match">
          <span>Match:</span> {match}
        </div>
      </div>
    </div>
  )
}
