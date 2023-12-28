import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
  currentUser: null
}

const initialState: UserState = {
  currentUser: null,
}

const userSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    loginUser: (state, action) => {
      state.currentUser = action.payload
    },
    logoutUser: (state) => {
      state.currentUser = null
    },
  },
})

export const { loginUser, logoutUser } = userSlice.actions
export default userSlice.reducer
