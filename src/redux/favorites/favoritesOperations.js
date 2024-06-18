import { createAsyncThunk } from '@reduxjs/toolkit';
import { recipeApi } from '../../services/Api.js';

export const getFavoritesList = createAsyncThunk(
  'favorites/getList',
  async (userId, { rejectWithValue }) => {
    try {
      const res = await recipeApi.getFavoriteRecipes({ userId });
      return res.data.result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  'favorites/addToFavorites',
  async (recipeId, { rejectWithValue }) => {
    try {
      await recipeApi.addToFavorites(recipeId);
      return recipeId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeFromFavorites = createAsyncThunk(
  'favorites/removeFromFavorites',
  async (recipeId, { rejectWithValue }) => {
    try {
      await recipeApi.removeFromFavorites(recipeId);
      return recipeId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
