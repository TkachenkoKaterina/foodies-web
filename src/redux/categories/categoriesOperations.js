import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { categoriesApi } from '../../services/Api.js';

import { BASE_URL } from '../../services/BaseUrl.js';

axios.defaults.baseURL = BASE_URL;

export const fetchCategories = createAsyncThunk(
    'getCategories',
    async (_, thunkAPI) => {
        try {
            const res = await categoriesApi.getCategories();
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);