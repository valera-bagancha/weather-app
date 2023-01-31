export enum ActionTypes {
  SET_AUTH_DATA = 'SET_AUTH_DATA',
  SET_USER = 'SET_AUTH_USER',
  SIGN_OUT = 'SIGN_OUT',
}

export interface IState {
  auth:{
  accessToken: string | null;
  user: {
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    phoneNumber: string;
  } | null
};
  favorites: {
    cities: string[];
    sportsEvents: {
      country: string;
      match: string;
      region: string;
      stadium: string;
      start: string;
      tournament: string;
    }[]
    // [key: string]: any
  };
  history: {
    history: string[]
  };
}

export interface IAuthState {
  accessToken: string | null;
  user: {
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    phoneNumber: string;
  } | null 
}
export interface IRegister {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  phoneNumber: string;
}

export interface ILogIn {
  email: string;
  password: string
}

interface ISetAuthData {
  type: ActionTypes.SET_AUTH_DATA;
  payload: IAuthState;
}

interface ISignOut {
  type: ActionTypes.SIGN_OUT;
  payload: undefined;
}

export type Action = ISetAuthData | ISignOut