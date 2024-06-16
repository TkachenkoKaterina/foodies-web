import { createSlice } from '@reduxjs/toolkit';
import { recipesInitialState } from './recipesInitialState';
import {
  getRecipesInCategory,
  getRecipeById,
  getPopularRecipes,
} from './recipesOperations';

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: recipesInitialState,
  reducers: {
    filter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getRecipesInCategory.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRecipesInCategory.fulfilled, (state, action) => {
        state.recipesList = action.payload;
        state.isLoading = false;
      })
      .addCase(getRecipesInCategory.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getRecipeById.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRecipeById.fulfilled, (state, action) => {
        state.recipe = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRecipeById.rejected, state => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getPopularRecipes.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPopularRecipes.fulfilled, (state, action) => {
        state.popular = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getPopularRecipes.rejected, state => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});
export const { filter } = recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;
