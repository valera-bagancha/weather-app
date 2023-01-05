import { Dispatch } from 'redux'
import AuthService from '../../api/AuthService'
import { registerUser } from './actionCreators'
import { IUserLogIn, IUserRegister } from './types'


export const registerUserAsync =
  (userParam: IUserRegister) =>
  async (dispatch: Dispatch): Promise<void> => {
    console.log('before request');
    
    const user = await AuthService.registerUser(userParam)

    console.log('after request');

    if (!user) return

    dispatch(registerUser(user))
  }

  export const logInUserAsync =
  (userParam: IUserLogIn) =>
  async (dispatch: Dispatch): Promise<void> => {
    const user = await AuthService.logInUser(userParam)

    if (!user) return

    dispatch(registerUser(user))
  }
