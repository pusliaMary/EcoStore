import { createSlice } from "@reduxjs/toolkit";

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    favouriteItems: []
  },
  reducers: {
    addItemToFavourites: (state, action) => {
        const timeId = new Date().getTime()
        if (state.favouriteItems.find(item => item.id===id)) return
        else { state.favouriteItems.push({
            id: timeId,
            productId: action.payload.product.id,
            quantity: action.payload.quantity,
            totalPrice: action.payload.quantity * action.payload.product.price,
            productImage: action.payload.product.img
        })}
    },
    removeItemFromFavourites: (state, action) => {
        state.favouriteItems= state.favouriteItems.filter(item => item.id !== action.payload.favouriteItemId)
    }
    }
})





export const getFavouriteItems = state => state.favourites.favouriteItems;

export const { addItemToFavourites, removeItemFromFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer