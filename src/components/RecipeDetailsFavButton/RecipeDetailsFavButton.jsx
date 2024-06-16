import React, { useState, useEffect } from 'react';
import { recipeApi } from '../../services/Api.js';
import styles from './RecipeDetailsFavButton.module.scss';
import Notiflix from 'notiflix';

const RecipeDetailsFavButton = ({ recipeId }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      if (!recipeId) {
        return;
      }
  
      try {
        const response = await recipeApi.getRecipes(recipeId);
        setIsFavorite(response.data.isFavorite);
      } catch (error) {
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
      if (error.response && error.response.data.message === 'Recipe already in favorites') {
        setIsFavorite(true); 
      } else if (error.response && error.response.status === 401) {
          Notiflix.Notify.failure('Please sign in or create an account.');
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
        Notiflix.Notify.failure('Please sign in or create an account.');
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
        <button type="button" className={styles.favButton} onClick={handleRemoveFromFavorites}>Remove from favorites</button>
      ) : (
        <button className={styles.favButton} type="button" onClick={handleAddToFavorites}>Add to favorites</button>
      )}
    </div>
  );
};

export default RecipeDetailsFavButton;
