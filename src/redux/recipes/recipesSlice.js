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
  extraReducers: builder => {
    builder
      .addCase(getRecipesInCategory.pending, (state, _) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRecipesInCategory.fulfilled, (state, _) => {
        state.recipesList = initialState.ripes;
        state.isLoading = false;
      })
      .addCase(getRecipesInCategory.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getRecipeById.pending, (state, _) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRecipeById.fulfilled, (state, action) => {
        state.recipe = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRecipeById.rejected, (state, _) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getPopularRecipes.pending, (state, _) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPopularRecipes.fulfilled, (state, _) => {
        state.popular = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getPopularRecipes.rejected, (state, _) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const recipes = recipesSlice.reducer;
