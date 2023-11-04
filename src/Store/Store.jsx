import { configureStore } from '@reduxjs/toolkit'
import userdetails from  "../Slices/UserDetail"
import signupdata from "../Slices/SignUpSlice"
import alljobsreducer from '../Slices/AlljobsSlice'
export const store = configureStore({
  reducer: {
    userdetail : userdetails,
    signup : signupdata,
    alljob : alljobsreducer

  },
})