import { createSlice } from '@reduxjs/toolkit';
import { recipesInitialState } from './recipesInitialState';
import {
  getRecipesInCategory,
  getRecipeById,
  getPopularRecipes,
} from './recipesOperations';

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipesList: [],
    recipe: {},
    popular: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getRecipesInCategory.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRecipesInCategory.fulfilled, state => {
        state.recipesList = initialState.recipesList;
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
      .addCase(getPopularRecipes.fulfilled, state => {
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

export const recipes = recipesSlice.reducer;
