import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./Cards/slice";
import favoriteReducer from "./Favorites/slice";

export default configureStore({
  reducer: {
    cards: cardsReducer,
    wishlist: favoriteReducer,
  },
});
