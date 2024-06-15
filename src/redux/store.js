import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth';
import categoriesReducer from './categories/categoriesSlice.js';
import { recipes } from './recipes/recipesSlice';

import testimonialsReducer from './testimonials/testimonialsSlice.js';

import areasReducer from './areas/areaSlice.js';
import ingredientsReducer from './ingredients/ingredientsSlice.js';

import modalReducer from './modal/modalSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer.auth,
    categories: categoriesReducer,
    testimonials: testimonialsReducer,
    recipes: recipes,
    areas: areasReducer,
    ingredients: ingredientsReducer,
    modal: modalReducer,
  },
});

const rootStore = { store };

export default rootStore;
