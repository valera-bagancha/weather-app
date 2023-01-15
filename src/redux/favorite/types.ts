export enum ActionTypes {
  ADD_FAVORITE_CITY = 'ADD_FAVORITE_CITY',
  ADD_FAVORITE_SPORT_EVENT = 'ADD_FAVORITE_SPORT_EVENT',
  DELETE_FAVORITE_CITY = 'DELETE_FAVORITE_CITY',
  DELETE_FAVORITE_SPORT_EVENT = 'DELETE_FAVORITE_SPORT_EVENT',
}

interface IAddFavoriteCity {
  type: ActionTypes.ADD_FAVORITE_CITY;
  payload: any;
}

interface IAddFavoriteSportEvent {
  type: ActionTypes.ADD_FAVORITE_SPORT_EVENT;
  payload: any;
}

interface IDeleteFavoriteItem {
  type: ActionTypes.DELETE_FAVORITE_CITY | ActionTypes.DELETE_FAVORITE_SPORT_EVENT;
  payload: any;
}


export type Action = IAddFavoriteCity | IAddFavoriteSportEvent | IDeleteFavoriteItem

