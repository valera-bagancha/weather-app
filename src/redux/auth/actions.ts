import { Dispatch } from 'redux'
import AuthService from '../../api/AuthService'
import { setAuthData } from './actionCreators'
import { ILogIn, IRegister } from './types'


export const registerUserAsync =
  (userParam: IRegister) =>
  async (dispatch: Dispatch): Promise<void> => {
    
    const user = await AuthService.registerUser(userParam)
    
    if (!user) return

    dispatch(setAuthData(user))
  }

  export const logInUserAsync =
  (userParam: ILogIn) =>
  async (dispatch: Dispatch): Promise<void> => {
    
    const user = await AuthService.logInUser(userParam)
    
    if (!user) return

    dispatch(setAuthData(user))
  }
