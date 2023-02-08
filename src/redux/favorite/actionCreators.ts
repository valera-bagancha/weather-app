import { IFootball } from '../../types/city/sportEvents'
import { ActionTypes } from './types'

const {
  ADD_FAVORITE_CITY,
  ADD_FAVORITE_SPORT_EVENT,
  DELETE_FAVORITE_CITY,
  DELETE_FAVORITE_SPORT_EVENT,
} = ActionTypes

export const addFavoriteCity = (city: string, userId: number) => ({
  type: ADD_FAVORITE_CITY,
  payload: {
    userId,
    city
  }
})

export const addFavoriteSportEvent = (sportEvent: IFootball, userId: number) => ({
  type: ADD_FAVORITE_SPORT_EVENT,
  payload: {
    sportEvent, 
    userId
  },
})

export const deleteFavoriteCity = (city: string, userId: number) => ({
  type: DELETE_FAVORITE_CITY,
  payload: {
    value: city,
    userId
  },
})

export const deleteFavoriteSportEvent = (match: string, userId: number) => ({
  type: DELETE_FAVORITE_SPORT_EVENT,
  payload: {
    value: match, 
    userId
  },
})
