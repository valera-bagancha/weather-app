import { ActionTypes } from './types'

const { SEARCH_HISTORY } = ActionTypes

export const searHistory = (city: string, idUser: number) => ({
  type: SEARCH_HISTORY,
  payload: {
    city,
    idUser
  }
})

