import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const UserDetails = createSlice({
  name: "userdetail",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    userLogin: (state, action) => {
      console.log(action.payload);
      console.log(state)
      state.push(action.payload)
    },
  },
});

export const {  userLogin } =
  UserDetails.actions;

export default UserDetails.reducer;
