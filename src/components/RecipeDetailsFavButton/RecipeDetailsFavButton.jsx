import React, { useState, useEffect } from 'react';
import styles from './RecipeDetailsFavButton.module.scss';
import Notiflix from 'notiflix';
import {
  addToFavorites,
  getFavoritesList,
  removeFromFavorites,
} from '../../redux/favorites/favoritesOperations.js';
import { getFavorites } from '../../redux/favorites/favoritesSelector.js';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/modal/modalSlice.js';
import { MODAL_TYPES } from '../../constants/common.js';
import { getIsLoggedIn, getUser } from '../../redux/auth/authSelectors.js';

const RecipeDetailsFavButton = ({
  recipeId,
  // handleAddToFavorites,
  // handleRemoveFromFavorites,
  favorites,
}) => {
  const dispatch = useDispatch();
  // const favorites = useSelector(getFavorites);
  // const isFavorite = favorites.includes(recipeId);
  const userId = useSelector(getUser);
  // const recipesFavList = useSelector(getFavorites);
  const isLoggedIn = useSelector(getIsLoggedIn);
  // const dispatch = useDispatch();
  console.log('button -> favotiteslist', favorites);

  let isFavorite;

  const checkFavorteStatus = () => {
    const status = favorites.some(({ _id }) => {
      console.log('_d', _id);
      console.log('id', recipeId);
      _id === recipeId;
    });
    isFavorite = status;
  };

  // const isFavorite = recipesFavList.find(favEl => {
  //   favEl._id === recipeId;
  // });
  useEffect(() => {
    if (!isLoggedIn) {
      return;
    } else {
      dispatch(getFavoritesList(userId._id));
      checkFavorteStatus();
    }
  }, [dispatch]);

  console.log(' кнопка шс фав ->>>>>', isFavorite);
  // console.log('кнопка статус   ==> ', isFavorite);

  const handleAddToFavorites = async () => {
    if (!recipeId) return;
    try {
      await dispatch(addToFavorites(recipeId)).unwrap();
      Notiflix.Notify.success('Recipe added to favorites successfully!');
    } catch (error) {
      if (error.message === 'Recipe already in favorites') {
        Notiflix.Notify.failure('Recipe already in favorites.');
      } else if (error.status === 401) {
        dispatch(openModal({ modalType: MODAL_TYPES.LOGIN, modalProps: {} }));
      } else {
        Notiflix.Notify.failure('Error adding to favorites.');
      }
    }
  };

  const handleRemoveFromFavorites = async () => {
    if (!recipeId) return;
    try {
      await dispatch(removeFromFavorites(recipeId)).unwrap();
      Notiflix.Notify.success('Recipe removed from favorites successfully!');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        dispatch(openModal({ modalType: MODAL_TYPES.LOGIN, modalProps: {} }));
      } else {
        Notiflix.Notify.failure('Error removing from favorites.');
      }
    }
  };

  return (
    <div>
      {isFavorite ? (
        <button
          type="button"
          className={styles.favButton}
          onClick={() => handleRemoveFromFavorites(recipeId)}
        >
          Remove from favorites
        </button>
      ) : (
        <button
          className={styles.favButton}
          type="button"
          onClick={() => handleAddToFavorites(recipeId)}
        >
          Add to favorites
        </button>
      )}
    </div>
  );
};

export default RecipeDetailsFavButton;
