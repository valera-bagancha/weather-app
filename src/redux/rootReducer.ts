import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authReducer } from './auth/authReducer'

const persistConfig = {
  key: 'root',
  storage,
}

export const rootReducer = persistReducer(persistConfig, combineReducers({authReducer}))
