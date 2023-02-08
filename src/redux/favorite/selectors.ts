import { createSelector } from 'reselect'
import { userIdSelector } from '../auth/selectors'
import { IState } from '../auth/types'

export const favoriteCitiesSelector = (state: IState) => state.favorites.cities

export const favoriteSportEventsSelector = (state: IState) =>
  state.favorites.sportsEvents

// advanced selectors

export const favoriteCitiesByUserIdSelector = createSelector(
  favoriteCitiesSelector,
  userIdSelector,
  (favoriteCities, userId) => {
    if (!userId) return []

    return favoriteCities.filter(cityFavorite => cityFavorite.userId === userId)
  }
)

export const favoriteSportEventsByUserIdSelector = createSelector(
  favoriteSportEventsSelector,
  userIdSelector,
  (favoriteSportEvents, userId) => {
    if (!userId) return []

    return favoriteSportEvents.filter(
      sportEvent => sportEvent.userId === userId
    )
  }
)

export const isEmptyFavoriteCitiesSelector = createSelector(
  favoriteCitiesByUserIdSelector,
  favoriteCities => !favoriteCities.length
)

export const isEmptyFavoriteSportEventsSelector = createSelector(
  favoriteSportEventsByUserIdSelector,
  favoriteSportEvents => !favoriteSportEvents.length
)
