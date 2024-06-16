import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../services/BaseUrl.js';
import { recipesApi } from '../../services/Api.js';

axios.defaults.baseURL = BASE_URL;

export const getRecipesInCategory = createAsyncThunk(
  'recipes/filter',
  async (category, params, thunkAPI) => {
    console.log('opers----->', { params });

    try {
      const res = await recipesApi.getRecipes(category, { params });
      console.log('Request');

      return res.data;
    } catch (error) {
      Notify.failure(error.message, {
        borderRadius: '30px',
        timeout: 4000,
      });
      thunkAPI.rejectWithValue(error);
    }
  }
);
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
  async (limit, { rejectWithValue }) => {
    try {
      const res = await recipesApi.getPopular(limit);
      return res.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// export const fetchSearchValue = createAsyncThunk(
//   'recipes/filter',
//   async (category, filter) => {
//     if (filter.area) {
//       const { data } = await recipesApi.get(category, params:{searchValue}
//         `${ADVERTS_URL}?location=${searchValue}`
//       );
//       return data;
//     }
//      const { data } = await recipesApi.getRecipes(category)
//     return data;
//   }
// );
