import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ingredientsApi } from '../../services/Api.js';

import { BASE_URL } from '../../services/BaseUrl.js';

axios.defaults.baseURL = BASE_URL;

export const fetchIngredients = createAsyncThunk(
  'getIngredients',
  async (_, thunkAPI) => {
    try {
      const res = await ingredientsApi.getIngredients();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
