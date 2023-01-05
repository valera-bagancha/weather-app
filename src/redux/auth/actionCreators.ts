import { ActionTypes } from './types'

const { REGISTER_USER, LOGIN_USER } = ActionTypes

export const registerUser = (user: any) => ({
  type: REGISTER_USER,
  payload: user,
});

export const logInUser = (user: any) => ({
  type: LOGIN_USER,
  payload: user,
});