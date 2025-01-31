import { combineReducers } from "redux";
import AuthSlice from "../features/AuthSlice";
import { configureStore } from "@reduxjs/toolkit";

const store=configureStore({
    reducer:{
        auth:AuthSlice
    }
  
})

export default store;