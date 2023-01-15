import { ActionTypes } from './types'

const { ADD_FAVORITE_CITY, ADD_FAVORITE_SPORT_EVENT, DELETE_FAVORITE_CITY, DELETE_FAVORITE_SPORT_EVENT} = ActionTypes

export const addFavoriteCity = (city: any) => ({
  type: ADD_FAVORITE_CITY,
  payload: city,
});

export const addFavoriteSportEvent = (sportEvent: any) => ({
  type: ADD_FAVORITE_SPORT_EVENT,
  payload: sportEvent,
});

export const deleteFavoriteCity = (city: string) => ({
  type: DELETE_FAVORITE_CITY,
  payload: city,
});

export const deleteFavoriteSportEvent = (sportEvent: string) => ({
  type: DELETE_FAVORITE_SPORT_EVENT,
  payload: sportEvent,
})