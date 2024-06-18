import { useDispatch, useSelector } from 'react-redux';
import { RecipeCard } from '../../ui-kit';
import { getPopularRecipes } from '../../redux/recipes/recipesOperations';
import { getPopular } from '../../redux/recipes/recipesSelectors';
import { useEffect } from 'react';
import styles from './PopularRecipes.module.scss';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/favorites/favoritesOperations.js';
import { getFavorites } from '../../redux/favorites/favoritesSelector.js';

const PopularRecipes = ({
  recipesFavList,
  handleAddToFavorites,
  handleRemoveFromFavorites,
}) => {
  const dispatch = useDispatch();
  // const favorites = useSelector(getFavorites);
  const recipesPopular = useSelector(getPopular);
  // const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(getPopularRecipes({ limit: 4 }));
  }, [dispatch, recipesFavList]);

  return (
    <div className={styles.wrap}>
      <h1 className={styles.header}>Popular Recipes</h1>
      <ul className={styles.popular}>
        {recipesPopular?.map((item, index) => {
          const status = recipesFavList?.some(
            favItem => favItem._id === item._id
          );
          return (
            <div key={item._id} className={styles.recipe_card}>
              <RecipeCard
                title={item.title}
                description={item.description}
                owner={item.owner}
                img={item.thumb}
                id={item._id}
                handleAddToFavorites={handleAddToFavorites}
                handleRemoveFromFavorites={handleRemoveFromFavorites}
                status={status}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default PopularRecipes;
