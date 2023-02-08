import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { SaveFavoriteButton } from '../../../../components/SaveFavoriteButton'

import {
  addFavoriteSportEvent,
  deleteFavoriteSportEvent,
} from '../../../../redux/favorite/actionCreators'
import { IFootball } from '../../../../types/city/sportEvents'
import { favoriteSportEventsByUserIdSelector } from '../../../../redux/favorite/selectors'
import { userIdSelector } from '../../../../redux/auth/selectors'
import { ISportEvent } from '../../../../redux/auth/types'

interface IProps {
  sportEvent: IFootball
}

export const CardSport = ({ sportEvent }: IProps) => {
  const { stadium, country, tournament, start, match } = sportEvent
  
  const favoriteSportEvents = useSelector(favoriteSportEventsByUserIdSelector)
  const userId = useSelector(userIdSelector)

  const dispatch = useDispatch()

  const checked = favoriteSportEvents.some(({sportEvent}: ISportEvent) =>  sportEvent.match === match)

  const addFavoriteSportEventHandler = () => {
    if (!userId) return

    if (checked) {
      return dispatch(deleteFavoriteSportEvent(match, userId))
    }
    return dispatch(addFavoriteSportEvent(sportEvent, userId))
  }

  const { t } = useTranslation()

  return (
    <div className="sport-card-box-city">
      <div className="title-box-sport">
        {t('sportEvent.mainSportEventTitle')}
      </div>
      <SaveFavoriteButton
        checked={checked}
        onChange={addFavoriteSportEventHandler}
        className={'custom-checkbox-sport'}
      />
      <div className="data-box-sport">
        <div className="stadium">
          <span>Stadium:</span> {stadium}
        </div>
        <div className="country">
          <span>Country:</span> {country}
        </div>
        <div className="tournament">
          <span>Tournament:</span> {tournament}
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
