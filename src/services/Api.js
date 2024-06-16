import { BASE_URL } from './BaseUrl';
import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiInstanceImages = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const token = {
  set(token) {
    apiInstance.defaults.headers.Authorization = `Bearer ${token}`;
    apiInstanceImages.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    apiInstance.defaults.headers.Authorization = '';
    apiInstanceImages.defaults.headers.Authorization = '';
  },
};

export const authApi = {
  register: data => apiInstance.post('/api/users/signup', data),
  login: data => apiInstance.post('/api/users/signin', data),
  getMe: () => apiInstance.get('/api/users/current'),
  logout: () => apiInstance.post('/api/users/logout'),
};

export const userApi = {
  getProfile: id => apiInstance.get(`/api/users/profile/${id}`),
  followUser: id => apiInstance.post(`/api/users/follow/${id}`),
  unfollowUser: id => apiInstance.delete(`/api/users/follow/${id}`),
  getFollowers: (id, params) =>
    apiInstance.get(`/api/users/followers/${id}`, { params }),
  getFollowing: params => apiInstance.get(`/api/users/following`, { params }),
  updateAvatar: data => apiInstanceImages.patch('/api/users/avatars', data),
};

export const recipeApi = {
  getRecipes: (id, params) => apiInstance.get(`/api/recipes/${id}`, { params }),
  deleteRecipe: id => apiInstance.delete(`/api/recipes/${id}`),
  getFavoriteRecipes: params =>
    apiInstance.get('/api/recipes/favorites/all', { params }),
  addToFavorites: id => apiInstance.post(`/api/recipes/favorites/${id}`),
  removeFromFavorites: id => apiInstance.delete(`/api/recipes/favorites/${id}`),
  createRecipe: formData => apiInstanceImages.post('/api/recipes/', formData),
};

export const categoriesApi = {
  getCategories: () => apiInstance.get('/api/categories'),
  getMoreCategories: value => apiInstance.get(`/api/categories?page=${value}`),
};

export const recipesApi = {
  getRecipes: (category, params) =>
    apiInstance.get(`/api/recipes/filter/${category}`, { params }),
  getRecipe: id => apiInstance.get(`/api/recipes/public/${id}`),
  getPopular: params => apiInstance.get(`/api/recipes/popular`, { params }),
};

export const testimonialsApi = {
  getTestimonials: () => apiInstance.get('/api/testimonials'),
};

export const areasApi = {
  getAreas: () => apiInstance.get('/api/areas'),
};

export const ingredientsApi = {
  getIngredients: () => apiInstance.get('/api/ingredients'),
};

///// getRecipes: (category, filter) => {
// if (filter.ingredient) {
//   apiInstance.get(
//     `/api/recipes/filter/${category}?ingredient=${filter.ingredient}&page=${filter.page}&limit=${filter.limit}`
//   );
// } else if (filter.area) {
//   apiInstance.get(
//     `/api/recipes/filter/${category}?area=${filter.area}&page=${filter.page}&limit=${filter.limit}`
//   );
// } else if (filter.ingredient && filter.area) {
//   apiInstance.get(
//     `/api/recipes/filter/${category}?ingredient=${filter.ingredient}&area=${filter.area}&page=${filter.page}&limit=${filter.limit}`
//   );
// } else {
//   apiInstance.get(`/api/recipes/filter/${category}`);
// }
// },
