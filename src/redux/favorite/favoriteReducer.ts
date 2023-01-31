import { Action, ActionTypes, IStateSport } from './types'
import { IFootball } from '../../types/city/sportEvents'

const initialState = {
  cities: [],
  sportsEvents: [],
}

export const favoriteReducer = (
  state: IStateSport = initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case ActionTypes.ADD_FAVORITE_CITY:
      return {
        ...state,
        cities: [...state.cities, payload],
      }

    case ActionTypes.ADD_FAVORITE_SPORT_EVENT:
      return {
        ...state,
        sportsEvents: [...state.sportsEvents, payload],
      }

    case ActionTypes.DELETE_FAVORITE_CITY:
      return {
        ...state,
        cities: state.cities.filter(
          ({ city, idUser }: any) =>
            city !== payload.city || idUser !== payload.idUser
        ),
      }

    case ActionTypes.DELETE_FAVORITE_SPORT_EVENT:
      return {
        ...state,
        sportsEvents: state.sportsEvents.filter(({ sportEvent, idUser }: any) =>
        sportEvent.match !== payload.match || idUser !== payload.idUser),
      }

    default:
      return state
  }
}
// (sportEvent: IFootball) => sportEvent?.match !== payload

// ({ sportEvent, idUser }: any) =>
// sportEvent.match !== payload.sportEvent.match || idUser !== payload.idUser