import { combineReducers } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import cartReducer from '../features/cart/cartSlice'

const rootReducer = combineReducers({ userReducer, cartReducer })

export default rootReducer
