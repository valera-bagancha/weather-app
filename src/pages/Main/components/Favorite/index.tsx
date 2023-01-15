import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import {
  deleteFavoriteCity,
  deleteFavoriteSportEvent,
} from '../../../../redux/favorite/actionCreators'

import { CityFavorite } from './components/CityFavorite'
import { SportFavorite } from './components/SportFavorite'

interface IProps {
  favoriteCities: string[]
  favoriteSportsEvents: any
  changeCurrentCity: any
  changeCurrentSportEvent: any
}

export const Favorite: FC<IProps> = ({
  favoriteCities,
  favoriteSportsEvents,
  changeCurrentCity,
  changeCurrentSportEvent,
}) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const deleteCurrentSportEvent = useCallback((param: string) => {
    dispatch(deleteFavoriteSportEvent(param))
  }, [])

  const deleteCurrentCity = useCallback((param: string) => {
    dispatch(deleteFavoriteCity(param))
  }, [])

  const CityFavoritesList = favoriteCities.map(city => (
    <CityFavorite
      key={city}
      city={city}
      changeCurrentCity={changeCurrentCity}
      deleteCurrentCity={deleteCurrentCity}
    />
  ))

  const SportFavoritesList = favoriteSportsEvents.map((sportEvent: any) => (
    <SportFavorite
      key={sportEvent.stadium}
      sportEvent={sportEvent}
      changeCurrentSportEvent={changeCurrentSportEvent}
      deleteCurrentSportEvent={deleteCurrentSportEvent}
    />
  ))

  return (
    <div className="favorite-box">
      <div className="title-of-favorites">
        {t('favoriteMain.titleFavorites')}
      </div>
      <div className="title-cites">{t('favoriteMain.favoritesCity')}</div>
      {!favoriteCities.length ? (
        <div className="text-for-empty-favorites">{t('empty-field')}</div>
      ) : (
        CityFavoritesList
      )}
      <div className="sports">
        <div className="title-cites">
          {t('favoriteMain.favoritesSportEvent')}
        </div>
        {!favoriteSportsEvents.length ? (
          <div className="text-for-empty-favorites">{t('empty-field')}</div>
        ) : (
          SportFavoritesList
        )}
      </div>
    </div>
  )
}
