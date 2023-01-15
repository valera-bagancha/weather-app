import { Action, ActionTypes } from './types';


const initialState = {
  cities: [],
  sportsEvents: [],
}


export const favoriteReducer = (state: any = initialState, { type, payload }: Action) => {

  switch (type) {
    case ActionTypes.ADD_FAVORITE_CITY:
      return {
        ...state,
        cities: [...state.cities, payload]
      }

    case ActionTypes.ADD_FAVORITE_SPORT_EVENT:
      return {
        ...state, 
        sportsEvents: [...state.sportsEvents, payload]
      }

    case ActionTypes.DELETE_FAVORITE_CITY:
      return {
        ...state, 
        cities: state.cities.filter((city: string) => city !== payload)
      }

    case ActionTypes.DELETE_FAVORITE_SPORT_EVENT:
      return {
        ...state, 
        sportsEvents: state.sportsEvents.filter((sportEvent: any) => sportEvent?.match !== payload)
      }

    default:
       return state
  }
}