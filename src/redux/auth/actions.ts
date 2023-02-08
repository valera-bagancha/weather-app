import { Dispatch } from 'redux'
import AuthService from '../../api/AuthService'
import { setAuthData } from './actionCreators'
import { ILogIn } from './types'

interface IValues {
  [key: string]: string
}

export const registerUserAsync =
  (userParam: IValues) =>
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
