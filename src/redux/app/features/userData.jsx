import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllDescription = createAsyncThunk("getAllDescription", async() => {
    const response = await fetch("https://fakestoreapi.com/products")
    try{
 const result = await response.json()
 return result
    }catch{
        console.log("error")

    }
})



export const userData = createSlice({
    name: "description",
    initialState: {
        description: [],
        loading: false,
        error: null
    },
    extraReducers: {
        [getAllDescription.pending]: (state) => {
            state.loading = true
        },
        [getAllDescription.fulfilled]: (state, action) => {
            state.loading = false
            state.description = action.payload
        },
        [getAllDescription.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export default userData.reducer