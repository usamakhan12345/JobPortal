import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const signUpSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
 
    usersignup: (state, action) => {
      console.log(action.payload);
      console.log(state)
      state.push(action.payload)
    },
  },
});

export const {  usersignup } =
signUpSlice.actions;

export default signUpSlice.reducer;
