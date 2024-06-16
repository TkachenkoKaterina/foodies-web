import React, { useState, useEffect } from 'react';
import { recipeApi } from '../../services/Api.js';
import styles from './RecipeDetailsFavButton.module.scss';

const RecipeDetailsFavButton = ({ recipeId }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      if (!recipeId) {
        return;
      }

      try {
        const response = await recipeApi.getRecipes(recipeId);
        setIsFavorite(response.data.isFavorite);
      } catch (error) {
        setError('Error fetching favorite status');
      }
    };

    fetchFavoriteStatus();
  }, [recipeId]);

  const handleAddToFavorites = async () => {
    if (!recipeId) {
      return;
    }

    try {
      const response = await recipeApi.addToFavorites(recipeId);
      setIsFavorite(true);
    } catch (error) {
      if (error.response && error.response.data.message === 'Recipe already in favorites') {
        setIsFavorite(true); 
      } else {
        setError('Error adding from favorites');
      }
    }
  };

  const handleRemoveFromFavorites = async () => {
    if (!recipeId) {
      return;
    }

   try {
      const response = await recipeApi.removeFromFavorites(recipeId);
      setIsFavorite(false);
    } catch (error) {
      setError('Error removing from favorites');
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
