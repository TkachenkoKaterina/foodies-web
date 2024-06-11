import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../../services/Api';
import { setToken } from '../../utils/cookies';

export const logout = createAsyncThunk('auth/logout', async () => {
  await authApi.logout();
  setToken();
  return null;
});

export const getMe = createAsyncThunk(
  'auth/getMe',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await authApi.getMe();
      return {
        ...data,
      };
    } catch (error) {
      setToken();
      return rejectWithValue();
    }
  }
);
