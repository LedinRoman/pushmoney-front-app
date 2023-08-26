
import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
    name: "transaction",
    initialState: {
        currencies: null,
    },
    reducers: {
        setCurrencies: (state, action) => {
            state.currencies = action.payload
        },

    },
});

export const { setCurrencies } = transactionSlice.actions;

export default transactionSlice.reducer;
