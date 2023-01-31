import { Action, ActionTypes, IHistory } from './types';


const initialState = {
  history: [],
}

export const searchHistoryReducer = (state: IHistory = initialState, { type, payload }: Action) => {  
  
  switch (type) {
    case ActionTypes.SEARCH_HISTORY:
      return {
        history: [...state.history, payload],
      }

    default:
       return state
  }
}