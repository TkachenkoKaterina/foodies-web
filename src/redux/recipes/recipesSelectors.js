export const getRecipes = state => state.recipes.recipesList.data;
export const getOneRecipe = state => state.recipes.recipe;
export const getPopular = state => state.recipes.popular.data;
export const getLoading = state => state.recipes.isLoading;
export const getError = state => state.recipes.error;
export const totalSelector = state => state.recipes.recipesList?.total;
export const filterSelector = state => state.recipes.filter;
