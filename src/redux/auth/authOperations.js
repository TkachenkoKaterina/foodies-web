import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi, token, userApi } from '../../services/Api';
import { getToken, setToken } from '../../utils/cookies';

export const logout = createAsyncThunk('auth/logout', async () => {
  await authApi.logout();
  setToken();
  token.unset();
  return null;
});

export const getMe = createAsyncThunk(
  'auth/getMe',
  async (_, { rejectWithValue }) => {
    const tokenValue = getToken();

    if (tokenValue) {
      token.set(tokenValue);
    }

    try {
      const { data } = await authApi.getMe();
      return data;
    } catch (error) {
      setToken();
      return rejectWithValue();
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await authApi.register(user);
      setToken(data.token);
      token.set(data.token);
      return data.user;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await authApi.login(user);
      setToken(data.token);
      token.set(data.token);
      return data.user;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  'auth/getUserProfile',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await userApi.getProfile(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
