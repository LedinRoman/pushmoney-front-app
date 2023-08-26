// profileSlice.js

import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        user: null,
        phone: "",
        password: "",
        email: "",
        location: "",

        firstName:"",
        lastName:"",
        middleName:"",
        county:"",
        city:"",
      },
    reducers: {
        setProfile: (state, action) => {
            state.user = action.payload
        },
        setPhone: (state, action) => {
        
            state.phone = action.payload
        },
        setPassword: (state, action) => {
            
            state.password = action.payload
        },
        setEmail: (state, action) => {
            
            state.email = action.payload
        },
        setLocation: (state, action) => {
            state.location = action.payload
        },
        setFirstName: (state, action) => {
           
            state.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        },
        setMiddleName: (state, action) => {
            state.middleName = action.payload
        },
        setCounty: (state, action) => {
            state.county = action.payload
        },
        setCity: (state, action) => {
            state.city = action.payload
        },
        
    },
});

export const { setProfile, setPhone ,setPassword, setEmail, setLocation, setFirstName, setLastName, setMiddleName, setCounty, setCity} = profileSlice.actions;

export default profileSlice.reducer;
