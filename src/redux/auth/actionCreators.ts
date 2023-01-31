import { ActionTypes, IAuthState } from './types'

const { SET_AUTH_DATA, SIGN_OUT } = ActionTypes

export const setAuthData = (user: IAuthState) => ({
  type: SET_AUTH_DATA,
  payload: user,
});

export const signOut = () => ({
  type: SIGN_OUT,
});