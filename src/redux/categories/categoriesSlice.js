import { createSlice } from '@reduxjs/toolkit';

import { fetchCategories } from './categoriesOperations.js';

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: {
            total: 0,
            result: []
        },
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCategories.pending, handlePending)
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, handleRejected);
    },
});

export default categoriesSlice.reducer;