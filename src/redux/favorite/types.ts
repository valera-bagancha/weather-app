import { ISport } from '../../types/city/sportEvents'
import { IHistory } from '../../types/history'

export enum ActionTypes {
  ADD_FAVORITE_CITY = 'ADD_FAVORITE_CITY',
  ADD_FAVORITE_SPORT_EVENT = 'ADD_FAVORITE_SPORT_EVENT',
  DELETE_FAVORITE_CITY = 'DELETE_FAVORITE_CITY',
  DELETE_FAVORITE_SPORT_EVENT = 'DELETE_FAVORITE_SPORT_EVENT',
}

interface ICity {
  userId: number 
  value: string
}

export interface IStateSport {
  cities: IHistory[]
  sportsEvents: ISport[] 
}
interface IAddFavoriteCity {
  type: ActionTypes.ADD_FAVORITE_CITY
  payload: IStateSport
}

interface IAddFavoriteSportEvent {
  type: ActionTypes.ADD_FAVORITE_SPORT_EVENT
  payload: IStateSport
}

interface IDeleteFavoriteItem {
  type:
    | ActionTypes.DELETE_FAVORITE_CITY
    | ActionTypes.DELETE_FAVORITE_SPORT_EVENT
  payload: ICity
}

export type Action =
  | IAddFavoriteCity
  | IAddFavoriteSportEvent
  | IDeleteFavoriteItem
