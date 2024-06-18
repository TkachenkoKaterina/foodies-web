import { createSlice } from '@reduxjs/toolkit';
import {
  addToFavorites,
  getFavoritesList,
  removeFromFavorites,
} from './favoritesOperations.js';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.favorites.push({ _id: action.payload });
      })
      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter(
          item => item._id !== action.payload
        );
      })
      .addCase(getFavoritesList.fulfilled, (state, action) => {
        state.favorites = action.payload;
      });
  },
});

export default favoritesSlice.reducer;
