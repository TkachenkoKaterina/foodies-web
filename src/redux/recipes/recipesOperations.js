import { createAsyncThunk } from '@reduxjs/toolkit';
import { recipesApi } from '../../services/Api';

export const getRecipesInCategory = createAsyncThunk(
  'recipes/filter',
  async (category, area, inngredientId, page, limit, { rejectWithValue }) => {
    try {
      const { data } = await recipesApi(
        category,
        area,
        inngredientId,
        page,
        limit
      );
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getRecipeById = createAsyncThunk(
  'recipes/recipe',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await getRecipe(id);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const getPopularRecipes = createAsyncThunk(
  'recipes/popular',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getPopularRecipes();
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
