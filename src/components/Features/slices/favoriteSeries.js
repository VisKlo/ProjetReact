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
    }
})

export const { addFavSeries } = favSeriesSlice.actions
export default favSeriesSlice.reducer