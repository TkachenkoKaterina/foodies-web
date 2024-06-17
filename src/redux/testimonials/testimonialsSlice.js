import { createSlice } from '@reduxjs/toolkit';

import { fetchTestimonials } from './testimonialsOperations.js';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState: {
    testimonials: {
      total: 0,
      result: [],
    },
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTestimonials.pending, handlePending)
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.testimonials.total = action.payload.result.length;
        state.isLoading = false;
        state.error = null;
        state.testimonials.result = action.payload.result;
      })
      .addCase(fetchTestimonials.rejected, handleRejected);
  },
});

export default testimonialsSlice.reducer;
