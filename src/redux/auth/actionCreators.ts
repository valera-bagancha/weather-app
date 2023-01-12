import { ActionTypes } from './types'

const { SET_AUTH_DATA, SET_USER } = ActionTypes

export const setAuthData = (user: any) => ({
  type: SET_AUTH_DATA,
  payload: user,
});

export const setUser = (user: any) => ({
  type: SET_USER,
  payload: user,
});


// FAVIRITE

// import { ActionTypes } from './types'

// const {  SAVE_CITY, SAVE_SPORT_EVENT, DELETE_CITY, DELETE_SPORT_EVENT } = ActionTypes

// export const saveCity = (city: any) => ({
//   type: SAVE_CITY,
//   payload: city,
// })

// export const saveSportEvent = (sportEvent: any) => ({
//   type: SAVE_SPORT_EVENT,
//   payload: sportEvent,
// })

// export const deleteCity = (cityId: any) => ({
//   type: DELETE_CITY,
//   payload: cityId,
// })

// export const deleteSportEvent = (sportEventId: any) => ({
//   type: DELETE_SPORT_EVENT, 
//   payload: sportEventId,
// }) 