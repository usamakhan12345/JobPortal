import { configureStore } from '@reduxjs/toolkit'
import userdetails from  "../Slices/UserDetail"
import signupdata from "../Slices/SignUpSlice"
export const store = configureStore({
  reducer: {
    userdetail : userdetails,
    signup : signupdata

  },
})