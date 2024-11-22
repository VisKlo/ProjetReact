import { createSlice } from "@reduxjs/toolkit";

const favFilmsSlice = createSlice({
    name: "favoriteFilms",
    initialState: {
        arrFilms: []
    },
    reducers: {
        addFavFilm: (state,action) => {
            state.arrFilms.push(action.payload)
        }
    }
})

export const { addFavFilm } = favFilmsSlice.actions
export default favFilmsSlice.reducer