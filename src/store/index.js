import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./PostSlice";

export const store = configureStore({
    reducer: {
        postSlice: postSlice.reducer,
    },
});