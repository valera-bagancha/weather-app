import { IFootball } from '../../types/city/sportEvents'

export enum ActionTypes {
  SET_AUTH_DATA = 'SET_AUTH_DATA',
  SET_USER = 'SET_AUTH_USER',
  SIGN_OUT = 'SIGN_OUT',
}

export interface ISportEvent {
  userId: number
  sportEvent: IFootball
}
export interface IState {
  auth: {
    accessToken: string | null
    user: {
      email: string
      firstName: string
      id: number
      lastName: string
      phoneNumber: string
    } | null
  }
  favorites: {
    cities: {
      userId: number
      city: string
    }[]
    sportsEvents: ISportEvent[]
  }
  history: {
    history: {
      userId: number
      city: string
    }[]
  }
}
export interface IAuthState {
  accessToken: string | null
  user: {
    email: string
    firstName: string
    id: number
    lastName: string
    phoneNumber: string
  } | null
}
export interface IRegister {
  email: string
  firstName: string
  id: string
  lastName: string
  phoneNumber: string
}

export interface ILogIn {
  [key: string]: string
}

interface ISetAuthData {
  type: ActionTypes.SET_AUTH_DATA
  payload: IAuthState
}

interface ISignOut {
  type: ActionTypes.SIGN_OUT
  payload: undefined
}

export type Action = ISetAuthData | ISignOut
