export const getRecipes = state => state.recipes.recipesList.data;
export const getOneRecipe = state => state.recipes.recipe;
export const gerPopular = state => state.recipes.popular;
export const getLoading = state => state.recipes.isLoading;
export const getError = state => state.recipes.error;
