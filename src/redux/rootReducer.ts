import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'
import { authReducer } from './auth/authReducer'

const persistConfig = {
  key: 'root',
  storage: localStorage,
  whiteList: ['auth']
}

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: authReducer,
  })
)
