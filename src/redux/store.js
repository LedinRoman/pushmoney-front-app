import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/slice.js";
import profile from "./profile/slice.js";
import transaction from "./transaction/slice.js";

const store = configureStore({
    reducer: {
        auth,
        profile,
        transaction
    },
});

export default store;
