import { createSlice } from "@reduxjs/toolkit";

const favFilmsSlice = createSlice({
    name: "favoriteFilms",
    initialState: {
        arrFilms: []
    },
    reducers: {
        addFavFilm: (state,action) => {
            state.arrFilms.push(action.payload)
        },
        removeFavFilm: (state,action) => {
            state.arrFilms.filter(item => item.id !== action.payload.id)
        }
    }
})

export const { addFavFilm, removeFavFilm } = favFilmsSlice.actions
export default favFilmsSlice.reducer