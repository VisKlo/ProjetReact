import { configureStore } from "@reduxjs/toolkit"
import favFilmsReducer from "../Features/favoriteFilms"
import favSeriesReducer from "../Features/favoriteSeries"
import tokenReducer from "../Features/token"

export const store = configureStore({
    reducer: {
        favoriteFilms: favFilmsReducer,
        favoriteSeries: favSeriesReducer,
        token: tokenReducer
    }
})