import { ActionTypes } from './types'

const { SEARCH_HISTORY } = ActionTypes

export const searHistory = (city: string, userId: number) => ({
  type: SEARCH_HISTORY,
  payload: {
    city,
    userId
  }
})

