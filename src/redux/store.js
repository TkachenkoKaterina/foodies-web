import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth';
import { recipes } from './recipes/recipesSlice';

const store = configureStore({
  reducer: {
    auth: authReducer.auth,
    recipes: recipes,
  },
});

const rootStore = { store };

export default rootStore;
