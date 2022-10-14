import {configureStore} from "@reduxjs/toolkit";
import pricesSlice from "./reducers/pricesSlice";

export const setupStore = () => {
    return configureStore({
        reducer: pricesSlice,
    })
}