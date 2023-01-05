import { Action, ActionTypes } from './types';

export const authReducer = (state: any = {}, { type, payload }: Action) => {
  switch (type) {
    case ActionTypes.REGISTER_USER:
      return {
        ...state, 
        
      }
      case ActionTypes.LOGIN_USER:
        return {
          ...state, 
          
        }

    default:
       return state
  }
}