import { combineReducers } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'

const rootReducer = combineReducers({ userReducer })

export default rootReducer
