import { createSlice } from "@reduxjs/toolkit";

const favSeriesSlice = createSlice({
    name: "favoriteSeries",
    initialState: {
        arrSeries: []
    },
    reducers: {
        addFavSeries: (state,action) => {
            state.arrSeries.push(action.payload)
        },
        removeFavSeries: (state,action) => {
            state.arrSeries.filter(item => item.id !== action.payload.id)
        }
    }
})

export const { addFavSeries, removeFavSeries } = favSeriesSlice.actions
export default favSeriesSlice.reducer