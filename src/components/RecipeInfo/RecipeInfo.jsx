import React from 'react';
import RecipeMainInfo from '../RecipeMainInfo/RecipeMainInfo';
import RecipeIngredients from '../RecipeIngredients/RecipeIngredients';
import Container from '../../ui-kit/Container/Container';
import styles from './RecipeInfo.module.scss';
import RecipeDetailsFavButton from '../RecipeDetailsFavButton/RecipeDetailsFavButton';

const RecipeInfo = ({ recipe }) => {
  return (
    <Container>
      <div className={styles.recipe_info_wrap}>
        <RecipeMainInfo recipe={recipe} />
        <RecipeIngredients ingredients={recipe.ingredients} />
        <RecipeDetailsFavButton recipeId={recipe.id} />
      </div>
    </Container>
  );
};

export default RecipeInfo;