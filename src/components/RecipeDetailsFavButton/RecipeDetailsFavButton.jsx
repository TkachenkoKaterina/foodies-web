import React, { useState, useEffect } from 'react';
import { recipeApi } from '../../services/Api.js';
import styles from './RecipeDetailsFavButton.module.scss';

const RecipeDetailsFavButton = ({ recipeId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      try {
        const response = await recipeApi.getRecipes(recipeId);
        setIsFavorite(response.data.isFavorite);
      } catch (error) {
        console.error('Error fetching favorite status:', error);
      }
    };

    fetchFavoriteStatus();
  }, [recipeId]);

  const handleAddToFavorites = async () => {
    try {
      await recipeApi.addToFavorites(recipeId);
      setIsFavorite(true);
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };

  const handleRemoveFromFavorites = async () => {
    try {
      await recipeApi.removeFromFavorites(recipeId);
      setIsFavorite(false);
    } catch (error) {
      console.error('Error removing from favorites:', error);
    }
  };

  return (
    <div>
      {isFavorite ? (
        <button type="button" className={styles.favButton} onClick={handleRemoveFromFavorites}>Remove from favorites</button>
      ) : (
        <button className={styles.favButton} type="button" onClick={handleAddToFavorites}>Add to favorites</button>
      )}
    </div>
  );
};

export default RecipeDetailsFavButton;
