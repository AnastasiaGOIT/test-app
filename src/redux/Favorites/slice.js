import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlistItems: localStorage.getItem('wishlistItems')
    ? JSON.parse(localStorage.getItem('wishlistItems'))
    : [],
  cardAmount: 0,
};

export const favoritesSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      let wishlistItem = { ...action.payload };
      state.wishlistItems?.push(wishlistItem);
      localStorage.setItem(
        'wishlistItems',
        JSON.stringify(state.wishlistItems)
      );
    },
    removeFromFavorites: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        item => item.name !== action.payload.name
      );
      localStorage.setItem(
        'wishlistItems',
        JSON.stringify(state.wishlistItems)
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
