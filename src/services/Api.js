import { BASE_URL } from './BaseUrl';
import axios from 'axios';

import { getToken } from '../utils/cookies';

const token = getToken();

export const apiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
    'Content-Type': 'application/json',
  },
});

export const apiInstanceImages = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
    'Content-Type': 'multipart/form-data',
  },
});

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
  getFollowers: id => apiInstance.get(`/api/users/followers/${id}`),
  getFollowing: () => apiInstance.get(`/api/users/following`),
  updateAvatar: data => apiInstanceImages.patch('/api/users/avatars', data),
};
