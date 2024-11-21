import { configureStore } from "@reduxjs/toolkit"
import favFilmsReducer from "./slices/favoriteFilms"
import favSeriesReducer from "./slices/favoriteSeries"
import tokenReducer from "./slices/token"

export const store = configureStore({
    reducer: {
        favoriteFilms: favFilmsReducer,
        favoriteSeries: favSeriesReducer,
        token: tokenReducer
    }
})