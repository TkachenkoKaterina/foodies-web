import React, { useState } from 'react';
import RecipeDetailsFavButton from '../RecipeDetailsFavButton/RecipeDetailsFavButton';
import styles from './RecipePreparation.module.scss';

const RecipePreparation = ({ recipe }) => {
  return (
    <div className={styles.recipe_description}>
      <h3 className={styles.title}>Recipe Preparation</h3>

      {recipe.instructions &&
        recipe.instructions.split('\r\n').map((paragraph, idx) => (
          <p key={idx} className={styles.instruction}>
            {paragraph}
          </p>
        ))}

      <RecipeDetailsFavButton recipeId={recipe.id} />
    </div>
  );
};
export default RecipePreparation;

