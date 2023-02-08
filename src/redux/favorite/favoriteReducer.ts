import { Action, ActionTypes, IStateSport } from './types'


const initialState = {
  cities: [],
  sportsEvents: [],
}

interface ISport {
    userId: number;
    sportEvent: {
      country: string;
      match: string;
      region: string;
      stadium: string;
      start: string;
      tournament: string;
    }
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
          ({ city, userId }) =>
            city !== payload.value || userId !== payload.userId
        ),
      }

    case ActionTypes.DELETE_FAVORITE_SPORT_EVENT:
      return {
        ...state,
        sportsEvents: state.sportsEvents.filter(({ sportEvent, userId }) =>           
          sportEvent.match !== payload.value || userId !== payload.userId)
      }

    default:
      return state
  }
}