import { configureStore } from "@reduxjs/toolkit";
import cartSlicer from "./features/cartSlicer";
import userData from "./features/userData";


export const store = configureStore({
    reducer: {
        kart: cartSlicer,
        description: userData 
    }
})
export default store