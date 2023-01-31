import { IState } from './types'

export const firstNameSelector = (state: IState) => state?.auth?.user?.firstName
export const accessTokenSelector = (state: IState) => state.auth.accessToken
export const userID = (state: any) => state?.auth?.user?.id