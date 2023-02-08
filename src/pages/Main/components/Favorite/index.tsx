import { FC, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { userIdSelector } from '../../../../redux/auth/selectors'

import {
  deleteFavoriteCity,
  deleteFavoriteSportEvent,
} from '../../../../redux/favorite/actionCreators'
import { IFootball } from '../../../../types/city/sportEvents'
import { ICurrentSportEventUser } from '../../../../types/currentSportEventUser'
import { CityFavorite } from './components/CityFavorite'
import { SportFavorite } from './components/SportFavorite'
import { IHistory } from '../../../../types/history'
import {
  favoriteCitiesByUserIdSelector,
  favoriteSportEventsByUserIdSelector,
  isEmptyFavoriteCitiesSelector,
  isEmptyFavoriteSportEventsSelector,
} from '../../../../redux/favorite/selectors'

interface IProps {
  changeCurrentCity: (param: string) => void
  changeCurrentSportEvent: (param: IFootball) => void
}

export const Favorite: FC<IProps> = ({
  changeCurrentCity,
  changeCurrentSportEvent,
}) => {
  const favoriteCitiesByUserId = useSelector(favoriteCitiesByUserIdSelector)
  const isEmptyCityFavorites = useSelector(isEmptyFavoriteCitiesSelector)
  const favoriteSportEventsByUserId = useSelector(
    favoriteSportEventsByUserIdSelector
  )
  const isEmptyFavoriteSportEvents = useSelector(
    isEmptyFavoriteSportEventsSelector
  )

  const userId = useSelector(userIdSelector)

  const dispatch = useDispatch()
  const { t } = useTranslation()

  const deleteCurrentSportEvent = useCallback((param: string) => {
    if (!userId) return

    dispatch(deleteFavoriteSportEvent(param, userId))
  }, [])

  const deleteCurrentCity = useCallback((param: string) => {
    if (!userId) return

    dispatch(deleteFavoriteCity(param, userId))
  }, [])

  const CityFavoritesList = favoriteCitiesByUserId.map((city: IHistory) => (
    <CityFavorite
      key={city.city}
      city={city.city}
      changeCurrentCity={changeCurrentCity}
      deleteCurrentCity={deleteCurrentCity}
    />
  ))

  const SportFavoritesList = favoriteSportEventsByUserId.map(
    (sportEvent: ICurrentSportEventUser) => (
      <SportFavorite
        key={sportEvent.sportEvent.stadium}
        sportEvent={sportEvent.sportEvent}
        changeCurrentSportEvent={changeCurrentSportEvent}
        deleteCurrentSportEvent={deleteCurrentSportEvent}
      />
    )
  )

  return (
    <div className="favorite-box">
      <div className="title-of-favorites">
        {t('favoriteMain.titleFavorites')}
      </div>
      <div className="title-cites">{t('favoriteMain.favoritesCity')}</div>
      {isEmptyCityFavorites ? (
        <div className="text-for-empty-favorites">{t('empty-field')}</div>
      ) : (
        CityFavoritesList
      )}
      <div className="sports">
        <div className="title-cites">
          {t('favoriteMain.favoritesSportEvent')}
        </div>
        {isEmptyFavoriteSportEvents ? (
          <div className="text-for-empty-favorites">{t('empty-field')}</div>
        ) : (
          SportFavoritesList
        )}
      </div>
    </div>
  )
}
