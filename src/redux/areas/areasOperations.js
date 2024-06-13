import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { areasApi } from '../../services/Api.js';

import { BASE_URL } from '../../services/BaseUrl.js';

axios.defaults.baseURL = BASE_URL;

export const areas = createAsyncThunk(
  'Areas',
  async (_, thunkAPI) => {
    try {
      const res = await areasApi.getAreas();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
