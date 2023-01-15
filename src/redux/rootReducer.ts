import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'

import { authReducer } from './auth/authReducer'
import { favoriteReducer } from './favorite/favoriteReducer'

const persistConfig = {
  key: 'root',
  storage: localStorage,
  whiteList: ['auth', 'favorites'],
}

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: authReducer,
    favorites: favoriteReducer,
  })
)
