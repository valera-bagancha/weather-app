import { ActionTypes } from './types'

const {
  ADD_FAVORITE_CITY,
  ADD_FAVORITE_SPORT_EVENT,
  DELETE_FAVORITE_CITY,
  DELETE_FAVORITE_SPORT_EVENT,
} = ActionTypes

export const addFavoriteCity = (city: string, idUser: number) => ({
  type: ADD_FAVORITE_CITY,
  payload: {
    idUser,
    city
  }
})

export const addFavoriteSportEvent = (sportEvent: string, idUser: number) => ({
  type: ADD_FAVORITE_SPORT_EVENT,
  payload: {
    sportEvent, 
    idUser
  },
})

// export const addFavoriteSportEvent = (sportEvent: string) => ({
//   type: ADD_FAVORITE_SPORT_EVENT,
//   payload: sportEvent,
// })

export const deleteFavoriteCity = (city: string, idUser: number) => ({
  type: DELETE_FAVORITE_CITY,
  payload: {
    city,
    idUser
  },
})

export const deleteFavoriteSportEvent = (match: any, idUser: number) => ({
  type: DELETE_FAVORITE_SPORT_EVENT,
  payload: {
    match, 
    idUser
  },
})
