import React, { useState } from 'react';
import RecipeDetailsFavButton from '../RecipeDetailsFavButton/RecipeDetailsFavButton';
import styles from './RecipePreparation.module.scss';

const RecipePreparation = ({
  recipe,
  // handleAddToFavorites,
  // handleRemoveFromFavorites,
  // status,
}) => {
  return (
    <div className={styles.recipe_description}>
      <h3 className={styles.title}>Recipe Preparation</h3>

      {recipe.instructions &&
        recipe.instructions.split('\r\n').map((paragraph, idx) => (
          <p key={idx} className={styles.instruction}>
            {paragraph}
          </p>
        ))}
      <div className={styles.fav_button}>
        {/* <RecipeDetailsFavButton
          recipeId={recipe._id}
          handleAddToFavorites={handleAddToFavorites}
          handleRemoveFromFavorites={handleRemoveFromFavorites}
          status={status}
        /> */}
      </div>
    </div>
  );
};
export default RecipePreparation;
