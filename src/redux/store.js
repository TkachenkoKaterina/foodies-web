import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth';
import categoriesReducer from './categories/categoriesSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer.auth,
    categories: categoriesReducer,
  },
});

const rootStore = { store };

export default rootStore;
