import { Action, ActionTypes } from './types';


const initialState = {
  accessToken: null,
  user: null,
}


export const authReducer = (state: any = initialState, { type, payload }: Action) => {  
  switch (type) {
    case ActionTypes.SET_AUTH_DATA:
      return payload;

    case ActionTypes.SET_USER:
      return {
        ...state, 
        
      }
    default:
       return state
  }
}