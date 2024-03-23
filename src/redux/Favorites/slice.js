import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [],
  cardAmount: 0,
};

export const favoritesSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      let existItem = state.wishlistItems?.findIndex(
        (item) => item._id === action.payload?._id
      );
      if (existItem >= 0) {
        alert("This product is already exists in your wishlist");
      } else {
        let wishlistItem = { ...action.payload };
        state.wishlistItems?.push(wishlistItem);
        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(state.wishlistItems)
        );
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
