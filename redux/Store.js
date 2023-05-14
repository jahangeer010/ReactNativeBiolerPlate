import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./Slices/NavSlice";

export const Store=configureStore({
    reducer:{
        app:NavSlice,


    }
})