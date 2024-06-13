import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth';
import categoriesReducer from './categories/categoriesSlice.js';
import { recipes } from './recipes/recipesSlice';
// import testimonialsSlice from './testimonials/testimonialsSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer.auth,
    categories: categoriesReducer,
    // testimonials: testimonialsReducer,
    recipes: recipes,
  },
});

const rootStore = { store };

export default rootStore;
