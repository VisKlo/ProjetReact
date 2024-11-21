import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
    name: "favorites",
    initialState: {
        arr: [{}]
    },
    reducers: {
        addFav: (state,action) => {
            state.arr.push(action.payload)
        },
        removeFav: (state,action) => {
            state.arr.filter(item => item.id !== action.payload.id)
        }
    }
})

export const { addFav, removeFav } = favSlice.actions
export default favSlice.reducer