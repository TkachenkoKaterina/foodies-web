import { createSlice } from '@reduxjs/toolkit';
import { addToFavorites, removeFromFavorites } from './favoritesOperations.js';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.favorites.push(action.payload);
      })
      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter(id => id !== action.payload);
      });
  },
});

export default favoritesSlice.reducer;
