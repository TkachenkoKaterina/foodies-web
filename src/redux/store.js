import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth';
import categoriesReducer from './categories/categoriesSlice.js';
import { recipesReducer } from './recipes/recipesSlice';

import testimonialsReducer from './testimonials/testimonialsSlice.js';

import areasReducer from './areas/areaSlice.js';
import ingredientsReducer from './ingredients/ingredientsSlice.js';

import modalReducer from './modal/modalSlice.js';
import favoritesReducer from './favorites/favoritesSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer.auth,
    categories: categoriesReducer,
    testimonials: testimonialsReducer,
    recipes: recipesReducer,
    areas: areasReducer,
    ingredients: ingredientsReducer,
    modal: modalReducer,
    favorites: favoritesReducer,
  },
});

const rootStore = { store };

export default rootStore;
