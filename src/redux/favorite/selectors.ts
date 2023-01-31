import { IState } from '../auth/types'


export const favoriteCityDataSelector = (state: any) => // IState
  state.favorites.cities
export const favoriteSportEventDataSelector = (state: any) => // IState
  state.favorites.sportsEvents
