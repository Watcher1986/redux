import { createStore, combineReducers } from 'redux'

import cartReducer from './cart.reducer'
import userReducer from './user.reducer'
import langReducer from './language.reducer'

const appReducer = combineReducers({
  language: langReducer,
  user: userReducer,
  cart: cartReducer
})

const store = createStore(appReducer);

export default store