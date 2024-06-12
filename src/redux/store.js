import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth';
import categoriesReducer from './categories/categoriesSlice.js';
import { recipes } from './recipes/recipesSlice';

const store = configureStore({
  reducer: {
    auth: authReducer.auth,
    categories: categoriesReducer,
    recipes: recipes,
  },
});

const rootStore = { store };

export default rootStore;
