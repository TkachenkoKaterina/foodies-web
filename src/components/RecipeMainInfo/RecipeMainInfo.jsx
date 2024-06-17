import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import RecipeIngredients from '../RecipeIngredients/RecipeIngredients';
import RecipePreparation from '../RecipePreparation/RecipePreparation';
import RecipeCreatedBy from '../RecipeCreatedBy/RecipeCreatedBy';
import styles from './RecipeMainInfo.module.scss';
import { getImagePath, TYPE_IMG } from '../../helpers/getImagePath';

const RecipeMainInfo = ({ recipe, navigateToUserPage, navigateToSignIn }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const owner = recipe.owner;

  return (
    <div className={styles.recipe_main_info}>
      <div className={styles.thumb_wrap}>
        <img src={getImagePath(recipe?.thumb, TYPE_IMG.RECIPE)} alt={recipe.title} />
      </div>
      <div className={styles.recipe_details}>
        <h3 className={styles.title}>{recipe.title}</h3>
        <div className={styles.category_time}>
          <p className={styles.category}>{recipe.category}</p>
          <p className={styles.category}>{recipe.time} min</p>
        </div>
        <p className={styles.description}>{recipe.description}</p>
        <RecipeCreatedBy
          ownerId={owner._id}
          name={owner.name}
          avatar={owner.avatar}
        />
        <RecipeIngredients ingredients={recipe.ingredients} />
        <RecipePreparation recipe={recipe} />
      </div>
    </div>
  );
};

export default RecipeMainInfo;