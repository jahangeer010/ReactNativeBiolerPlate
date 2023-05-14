import {createSlice} from "@reduxjs/toolkit";

const navSlice=createSlice({
    name:"navSlice",
    initialState:{
        origin:null,
        destination:null,
        users:null,
        travelTimeInformation:null,
    },
    reducers:{
        setOrigin:(state,action)=>{
            state.origin=action.payload;
        },
        setDestination:(state,action)=>{
            state.origin=action.payload;
        },
        setTravelTimeInformation:(state,action)=>{
            state.origin=action.payload;
        },
    },
    extraReducers:{

    },

})


export default navSlice.reducer
export const {setDestination,setOrigin,setTravelTimeInformation}=navSlice.actions;
//Selectors
export const SelectOrigin=(state,action)=>state.navSlice.origin
export const SelectDestination=(state)=>state.navSlice.destination
export const SelectTravelTimeInformation=(state)=>state.navSlice.setTravelTimeInformation