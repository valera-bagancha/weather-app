import { FC, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { userID } from '../../../../redux/auth/selectors'

import {
  deleteFavoriteCity,
  deleteFavoriteSportEvent,
} from '../../../../redux/favorite/actionCreators'
import { IFootball } from '../../../../types/city/sportEvents'
import { ICurrentSportEventUser } from '../../../../types/currentSportEventUser'
import { ICurrentCityUser } from '../../../../types/currentCityUser'
import { CityFavorite } from './components/CityFavorite'
import { SportFavorite } from './components/SportFavorite'

interface IProps {
  favoriteCities: string[]
  favoriteSportsEvents: IFootball
  changeCurrentCity: (param: string) => void
  changeCurrentSportEvent: (param: IFootball) => void
  currentCityFavorite: boolean
  currentSportEventFavorite: boolean
}

export const Favorite: FC<IProps> = ({
  favoriteCities,
  favoriteSportsEvents,
  changeCurrentCity,
  changeCurrentSportEvent,
  currentCityFavorite,
  currentSportEventFavorite
}) => {
  
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const idUser = useSelector(userID)

  const deleteCurrentSportEvent = useCallback((param: string) => {
    
    dispatch(deleteFavoriteSportEvent(param, idUser))
  }, [])

  const deleteCurrentCity = useCallback((param: string) => {

    dispatch(deleteFavoriteCity(param, idUser)) 

  }, [])

  const CityFavoritesList = useMemo(() => {
    const currentFavoriteList =  favoriteCities.filter((userId: any) => idUser === userId.idUser)
    return currentFavoriteList.map((city: any) => <CityFavorite
        key={city.city}
        city={city.city}
        changeCurrentCity={changeCurrentCity}
        deleteCurrentCity={deleteCurrentCity}
      />)
  }, [favoriteCities, idUser])

  const SportFavoritesList = useMemo(() => {
    const currentFavoriteList =  favoriteSportsEvents.filter((userId: ICurrentSportEventUser) =>  idUser === userId.idUser)
    
    return currentFavoriteList.map((sportEvent: ICurrentSportEventUser) => (
        <SportFavorite
          key={sportEvent.sportEvent.stadium}
          sportEvent={sportEvent.sportEvent}
          changeCurrentSportEvent={changeCurrentSportEvent}
          deleteCurrentSportEvent={deleteCurrentSportEvent}
        />
  ))}, [favoriteSportsEvents, idUser])
  
  return (
    <div className="favorite-box">
      <div className="title-of-favorites">
        {t('favoriteMain.titleFavorites')}
      </div>
      <div className="title-cites">{t('favoriteMain.favoritesCity')}</div>
      {currentCityFavorite ? (
        <div className="text-for-empty-favorites">{t('empty-field')}</div>
      ) : (
        CityFavoritesList
      )}
      <div className="sports">
        <div className="title-cites">
          {t('favoriteMain.favoritesSportEvent')}
        </div>
        {currentSportEventFavorite ? (
          <div className="text-for-empty-favorites">{t('empty-field')}</div>
        ) : (
          SportFavoritesList
        )}
      </div>
    </div>
  )
}
