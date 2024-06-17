export const recipesInitialState = {
  recipesList: [],
  filter: {
    ingredient: '',
    area: '',
    page: null,
    limit: null,
  },
  recipe: {},
  popular: [],
  isLoading: false,
  error: null,
};
