import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from './authOperations';

const initialState = {
  user: {
    _id: null,
    name: null,
    email: null,
    avatar: null,
    following: [],
  },
  isLoggedIn: false,
  isRefreshing: true,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRefreshing: (state, action) => {
      state.isRefreshing = action.payload;
    },
    updateFollowing: (state, action) => {
      if (state.user.following.includes(action.payload)) {
        state.user.following = state.user.following.filter(
          id => id !== action.payload
        );
      } else {
        state.user.following = [...state.user.following, action.payload];
      }
    },
    updateAvatar: (state, action) => {
      state.user.avatar = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(authOperations.register.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
      })
      .addCase(authOperations.login.pending, state => {
        state.isLoading = true;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(authOperations.login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(authOperations.login.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.logout.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authOperations.logout.fulfilled, state => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(authOperations.logout.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(authOperations.getMe.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(authOperations.getMe.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(authOperations.getMe.rejected, state => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      });
  },
});

export const auth = authSlice.reducer;

export const { setRefreshing, updateFollowing, updateAvatar } =
  authSlice.actions;
