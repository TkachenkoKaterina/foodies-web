import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth';
import categoriesReducer from './categories/categoriesSlice.js';
import { recipes } from './recipes/recipesSlice';
import areasReducer from './areas/areaSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer.auth,
    categories: categoriesReducer,
    recipes: recipes,
    areas: areasReducer,
  },
});

const rootStore = { store };

export default rootStore;
