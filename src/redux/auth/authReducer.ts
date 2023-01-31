import { Action, ActionTypes, IAuthState } from './types'

const initialState = {
  accessToken: null,
  user: null,
}

export const authReducer = (
  state: IAuthState = initialState,
  { type, payload }: Action
) => {
  
  switch (type) {
    case ActionTypes.SET_AUTH_DATA:
      return payload

    case ActionTypes.SIGN_OUT:
      return {
        accessToken: null,
        user: null,
      }

    default:
      return state
  }
}
