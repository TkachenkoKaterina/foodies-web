import { createSlice } from '@reduxjs/toolkit';

import { areas } from "./areasOperations.js"

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const areasSlice = createSlice({
  name: 'areas',
  initialState: {
    areas: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(areas.pending, handlePending)
      .addCase(areas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.areas = action.payload;
      })
      .addCase(areas.rejected, handleRejected);
  },
});

export default areasSlice.reducer;
