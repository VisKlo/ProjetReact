import { configureStore } from "@reduxjs/toolkit";
import favReducer from "../Features/favorites"

export const store = configureStore({
    reducer: {
        favorites: favReducer
    }
})