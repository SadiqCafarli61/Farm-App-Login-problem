import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const cartSlicer = createSlice({
    name: "cart",

    initialState: {
        kart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.kart.push(action.payload)
        },
        removeCartfrom: (state, action) => {
            state.kart = state.kart.filter(x => x.id !== action.payload.id)
        }
    }
})
export const {addToCart, removeCartfrom, } = cartSlicer.actions
export default cartSlicer.reducer