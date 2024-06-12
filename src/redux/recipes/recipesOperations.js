import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../services/BaseUrl.js';
import { recipesApi } from '../../services/Api.js';

axios.defaults.baseURL = BASE_URL;

export const getRecipesInCategory = createAsyncThunk(
  'recipes/filter',
  async (category, params, thunkAPI) => {
    try {
      console.log('argument passed to action creator:', category);

      const { data } = await recipesApi.getRecipes(category, params);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
getRecipesInCategory('Beef');
export const getRecipeById = createAsyncThunk(
  'recipes/recipe',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await recipesApi.getRecipe(id);
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
