import { configureStore } from "@reduxjs/toolkit";
import dishes from './dishesSlice'
import cart from "./cartSlice"

export const store = configureStore ({
    reducer: {
        dishes, //   value dishes from dishesSlice!!! not component Dishes! this is object
        cart
    }
})