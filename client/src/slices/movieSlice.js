import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    // Actions
    addToFavourites: (state, action) => {},
    removeFromFavourites: (state, action) => {},
  },
});

export const { addToBasket, removeFromFavourites } = movieSlice.actions;

// Selectors - This is how we pull information from the Global store slice and
export const selectItems = (state) => state.movie.items;

export default movieSlice.reducer;
