import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

import { getToken } from '../utils/cookies';
import { authOperations, authReducer } from '../redux/auth';
import favoritesSlice from '../redux/favorites/favoritesSlice';

export const useFetchSession = () => {
  const dispatch = useDispatch();
  const token = getToken();

  useEffect(() => {
    if (token) {
      dispatch(authOperations.getMe());
    } else {
      dispatch(authReducer.setRefreshing(false));
    }
  }, [dispatch, token]);
};

export const useLogout = () => {
  const dispatch = useDispatch();

  const onLogout = async () => {
    try {
      const resultAction = await dispatch(authOperations.logout());
      unwrapResult(resultAction);
      dispatch(
        favoritesSlice({
          favorites: [],
        })
      );
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return { onLogout };
};
