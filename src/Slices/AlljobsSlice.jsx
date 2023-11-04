import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";



const initialState = []



const Alljobs = createSlice({
    name : 'alljobs',
    initialState,
    reducers :{
        jobs : (state,action)=>{
                console.log(state)
                console.log(action)
        }
    }
})


export  const {jobs} = Alljobs.actions 

export default Alljobs.reducer