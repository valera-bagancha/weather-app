export enum ActionTypes {
  SEARCH_HISTORY = 'SEARCH_HISTORY',
}

export interface IHistory {
  history: {
    userId: number;
    value: string;
  }[]
}

interface ISearchHistory {
  type: ActionTypes.SEARCH_HISTORY;
  payload: string;
}

export type Action = ISearchHistory 
