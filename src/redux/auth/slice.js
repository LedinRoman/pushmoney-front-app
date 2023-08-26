// authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        access_token: null,
        refresh_token: null,
        phone: "",
        password: "",
        access_password: "",
        isLogin:false
    },
    reducers: {
        setIsLogin: (state, action) => {
            state.isLogin = action.payload
        },
        setPhone: (state, action) => {
            state.phone = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setAccessPassword: (state, action) => {
            state.access_password = action.payload
        },
        setTokens: (state, action) => {
            state.access_token = action.payload.access_token;
            state.refresh_token = action.payload.refresh_token;
            localStorage.setItem('access_token', state.access_token);
            localStorage.setItem('refresh_token', state.refresh_token);
            state.isLogin = true;
        },
        clearTokens: (state) => {
            state.access_token = null;
            state.refresh_token = null;
        },
    },
});

export const { setTokens, clearTokens,setPhone,setPassword,setAccessPassword, setIsLogin } = authSlice.actions;

export default authSlice.reducer;
