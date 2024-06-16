import { useDispatch, useSelector } from 'react-redux';
import { RecipeCard, Subtitle } from '../../ui-kit';

import { getPopularRecipes } from '../../redux/recipes/recipesOperations';
import { getPopular } from '../../redux/recipes/recipesSelectors';
import { useEffect, useState } from 'react';
import styles from './PopularRecipes.module.scss';
import { recipeApi } from '../../services/Api';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
const PopularRecipes = () => {
  const dispatch = useDispatch();
  const [recipesFavList, setRecipesFavList] = useState(null);
  useEffect(() => {
    dispatch(getPopularRecipes({ limit: 4 }));
  }, [dispatch]);

  const recipesPopular = useSelector(getPopular);

  const [loading, setIsLoading] = useState('true');
  const isLoggedIn = useSelector(getIsLoggedIn);
  const getFavRecipesList = async () => {
    try {
      const { data } = await recipeApi.getFavoriteRecipes();
      setRecipesFavList(data.result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      getFavRecipesList();
    } else {
      return;
    }
  }, [isLoggedIn]);

  const handleAddToFavorites = async id => {
    try {
      await recipeApi.addToFavorites(id);
      getFavRecipesList();
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };

  const handleRemoveFromFavorites = async id => {
    try {
      await recipeApi.removeFromFavorites(id);
      getFavRecipesList();
    } catch (error) {
      console.error('Error removing from favorites:', error);
    }
  };

  return (
    <>
      <h1 className={styles.header}>Popular Recipes</h1>
      <ul className={styles.popular}>
        {recipesPopular?.map((item, index) => {
          const status = recipesFavList?.some(
            favItem => favItem._id === item._id
          );
          return (
            <RecipeCard
              key={item._id + index}
              title={item.title}
              description={item.description}
              owner={item.owner}
              img={item.thumb}
              id={item._id}
              status={status}
              handleAddToFavorites={handleAddToFavorites}
              handleRemoveFromFavorites={handleRemoveFromFavorites}
              recipesFavList={recipesFavList}
            />
          );
        })}
      </ul>
    </>
  );
};
export default PopularRecipes;
