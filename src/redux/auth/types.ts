export enum ActionTypes {
  SET_AUTH_DATA = 'SET_AUTH_DATA',
  SET_USER = 'SET_AUTH_USER',
  // SAVE_CITY = 'SAVE_CITY',
  // SAVE_SPORT_EVENT = 'SAVE_SPORT_EVENT',
  // DELETE_CITY = 'DELETE_CITY',
  // DELETE_SPORT_EVENT = 'DELETE_SPORT_EVENT',
}

// export interface IUserRegister extends IUserLogIn {
//   firstName: string;
//   lastName: string;
//   phoneNumber: string;
//   confirmPassword?: string;
// }

// export interface IUserLogIn {
//   email: string;
//   password: string;
// }

interface ISetAuthData {
  type: ActionTypes.SET_AUTH_DATA;
  payload: any;
}

interface ISetUser {
  type: ActionTypes.SET_USER;
  payload: any;
}

// interface ISaveCity {
//   type: ActionTypes.SAVE_CITY;
//   payload: any;
// }

// interface ISaveSportEvent {
//   type: ActionTypes.SAVE_SPORT_EVENT;
//   payload: any;
// }

// interface IDeleteCity {
//   type: ActionTypes.DELETE_CITY;
//   payload: any;
// }

// interface IDeleteSportEvent {
//   type: ActionTypes.DELETE_SPORT_EVENT;
//   payload: any;
// }

export type Action = ISetAuthData | ISetUser


// export enum ActionTypes {
//   SAVE_CITY = 'SAVE_CITY',
//   SAVE_SPORT_EVENT = 'SAVE_SPORT_EVENT',
//   DELETE_CITY = 'DELETE_CITY',
//   DELETE_SPORT_EVENT = 'DELETE_SPORT_EVENT',
// } 

// export interface ICitySave {

// }

// export interface ICitySave {
  
// }

// export interface ICitySave {
  
// }

// export interface ICitySave {
  
// }


// export interface IUserRegister extends IUserLogIn {
//   firstName: string;
//   lastName: string;
//   phoneNumber: string;
//   confirmPassword?: string;
// }

// interface ISaveCity {
//   type: ActionTypes.SAVE_CITY;
//   payload: any;
// }

// interface ISaveSportEvent {
//   type: ActionTypes.SAVE_SPORT_EVENT;
//   payload: any;
// }

// interface IDeleteCity {
//   type: ActionTypes.DELETE_CITY;
//   payload: any;
// }

// interface IDeleteSportEvent {
//   type: ActionTypes.DELETE_SPORT_EVENT;
//   payload: any;
// }

// export type Action = ISaveCity | ISaveSportEvent | IDeleteCity | IDeleteSportEvent

























// export enum ActionTypes {
//   REGISTER_USER = 'REGISTER_USER',
//   LOGIN_USER = 'LOGIN_USER',
// }

// export interface IUserRegister extends IUserLogIn {
//   firstName: string;
//   lastName: string;
//   phoneNumber: string;
//   confirmPassword?: string;
// }

// export interface IUserLogIn {
//   email: string;
//   password: string;
// }

// interface IRegisterUser {
//   type: ActionTypes.REGISTER_USER;
//   payload: any;
// }

// interface ILogInUser {
//   type: ActionTypes.LOGIN_USER;
//   payload: any;
// }


// export type Action = IRegisterUser | ILogInUser