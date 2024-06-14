import { createAsyncThunk } from '@reduxjs/toolkit';

import { categoriesApi } from '../../services/Api.js';

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