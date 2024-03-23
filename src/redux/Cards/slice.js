import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "../../services/api";

const initialState = {
  cards: [],
  page: 1,
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAdverts.fulfilled, (state, action) => {
      state.cards = action.payload;
    });
  },
});

export default cardsSlice.reducer;
