import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { SaveFavoriteButton } from '../../../../components/SaveFavoriteButton'

import {
  addFavoriteSportEvent,
  deleteFavoriteSportEvent,
} from '../../../../redux/favorite/actionCreators'
import { IFootball } from '../../../../types/city/sportEvents'
import { favoriteSportEventDataSelector } from '../../../../redux/favorite/selectors'
import { userID } from '../../../../redux/auth/selectors'
import { ICurrentSportEventUser } from '../../../../types/currentSportEventUser'


export const CardSport = ({ sportEvent }: IFootball) => {
  
  const { stadium, country, tournament, start, match } = sportEvent
  
  const favoriteSportEvents = useSelector(favoriteSportEventDataSelector)
  const userId = useSelector(userID)

  const dispatch = useDispatch()

  const currentSportsEvent = favoriteSportEvents.filter((id: ICurrentSportEventUser) => userId === id.idUser)

  const checked = currentSportsEvent.some(({ sportEvent }: IFootball) => sportEvent.match === match)
  
  const addFavoriteSportEventHandler = () => {
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
