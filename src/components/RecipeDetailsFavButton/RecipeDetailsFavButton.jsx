import React, { useState, useEffect } from 'react';
import { recipesApi, recipeApi } from '../../services/Api.js';
import styles from './RecipeDetailsFavButton.module.scss';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/modal/modalSlice.js';
import { MODAL_TYPES } from '../../constants/common.js';
import { getIsLoggedIn } from '../../redux/auth/authSelectors.js';

const RecipeDetailsFavButton = ({ recipeId }) => {
  const isLoggedId = useSelector(getIsLoggedIn);
  const [isFavorite, setIsFavorite] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      if (!recipeId) {
        return;
      }
      if (isLoggedId) {
        try {
          const response = await recipeApi.getRecipes(recipeId);
          setIsFavorite(response.data.isFavorite);
        } catch (error) {}
      } else {
        try {
          const response = await recipesApi.getRecipe(recipeId);
          setIsFavorite(response.data.isFavorite);
        } catch (error) {}
      }
    };

    fetchFavoriteStatus();
  }, [recipeId]);

  const handleAddToFavorites = async () => {
    if (!recipeId) {
      return;
    }

    try {
      setLoading(true);
      const response = await recipeApi.addToFavorites(recipeId);
      setIsFavorite(true);
      Notiflix.Notify.success('Recipe added to favorites successfully!');
    } catch (error) {
      if (
        error.response &&
        error.response.data.message === 'Recipe already in favorites'
      ) {
        setIsFavorite(true);
      } else if (error.response && error.response.status === 401) {
        dispatch(openModal({ modalType: MODAL_TYPES.LOGIN, modalProps: {} }));
      } else {
        Notiflix.Notify.failure('Error adding to favorites.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveFromFavorites = async () => {
    if (!recipeId) {
      return;
    }

    try {
      setLoading(true);
      const response = await recipeApi.removeFromFavorites(recipeId);
      setIsFavorite(false);
      Notiflix.Notify.success('Recipe removed from favorites successfully!');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        dispatch(openModal({ modalType: MODAL_TYPES.LOGIN, modalProps: {} }));
      } else {
        Notiflix.Notify.failure('Error removing from favorites.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {error && <p className={styles.error}>{error}</p>}
      {isFavorite ? (
        <button
          type="button"
          className={styles.favButton}
          onClick={handleRemoveFromFavorites}
        >
          Remove from favorites
        </button>
      ) : (
        <button
          className={styles.favButton}
          type="button"
          onClick={handleAddToFavorites}
        >
          Add to favorites
        </button>
      )}
    </div>
  );
};

export default RecipeDetailsFavButton;
