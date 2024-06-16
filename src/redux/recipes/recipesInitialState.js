export const recipesInitialState = {
  recipesList: [],
  filter: {
    ingredient: '',
    area: '',
    page: '',
    limit: '',
  },
  recipe: {},
  popular: [],
  isLoading: false,
  error: null,
};
