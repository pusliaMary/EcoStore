import { configureStore } from "@reduxjs/toolkit";
import products from './productsSlice'
import cart from "./cartSlice"
import favourites from "./favouritesSlice"




export const store = configureStore ({
    reducer: {
        products,
        cart,
        favourites
        
    }
})