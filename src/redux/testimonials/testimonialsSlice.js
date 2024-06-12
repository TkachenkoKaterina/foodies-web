// import { createSlice } from '@reduxjs/toolkit';

// import { fetchTestimonials } from './testimonialsOperations.js';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const testimonialsSlice = createSlice({
//   name: 'testimonials',
//   initialState: {
//     testimonials: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchTestimonials.pending, handlePending)
//       .addCase(fetchTestimonials.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.testimonials = action.payload;
//       })
//       .addCase(fetchTestimonials.rejected, handleRejected);
//   },
// });

// export default testimonialsSlice.reducer;
