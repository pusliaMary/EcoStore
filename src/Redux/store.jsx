import { configureStore } from "@reduxjs/toolkit";
import dishes from './dishesSlice'
import cart from "./cartSlice"
import favourites from "./favouritesSlice"




export const store = configureStore ({
    reducer: {
        dishes,
        cart,
        favourites
        
    }
})