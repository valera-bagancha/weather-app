import { Dispatch } from 'redux'
import AuthService from '../../api/AuthService'
import { setAuthData } from './actionCreators'
// import { IUserLogIn, IUserRegister } from './types'

export const registerUserAsync =
  (userParam: any) =>
  async (dispatch: Dispatch): Promise<void> => {
    
    const user = await AuthService.registerUser(userParam)
    
    if (!user) return

    dispatch(setAuthData(user))
  }

  export const logInUserAsync =
  (userParam: any) =>
  async (dispatch: Dispatch): Promise<void> => {
    
    const user = await AuthService.logInUser(userParam)
    
    if (!user) return

    dispatch(setAuthData(user))
  }
