export enum ActionTypes {
  REGISTER_USER = 'REGISTER_USER',
  LOGIN_USER = 'LOGIN_USER',
}

export interface IUserRegister extends IUserLogIn {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  confirmPassword?: string;
}

export interface IUserLogIn {
  email: string;
  password: string;
}

interface IRegisterUser {
  type: ActionTypes.REGISTER_USER;
  payload: any;
}

interface ILogInUser {
  type: ActionTypes.LOGIN_USER;
  payload: any;
}


export type Action = IRegisterUser | ILogInUser