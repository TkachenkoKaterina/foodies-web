import { useDispatch, useSelector } from 'react-redux';
import { RecipeCard } from '../../ui-kit';
import { getPopularRecipes } from '../../redux/recipes/recipesOperations';
import { getPopular } from '../../redux/recipes/recipesSelectors';
import { useEffect } from 'react';
import styles from './PopularRecipes.module.scss';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { addToFavorites, removeFromFavorites } from '../../redux/favorites/favoritesOperations.js'; 
import { getFavorites } from '../../redux/favorites/favoritesSelector.js'; 

const PopularRecipes = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);
  const recipesPopular = useSelector(getPopular);
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(getPopularRecipes({ limit: 4 }));
  }, [dispatch]);

  const handleAddToFavorites = async (id) => {
    try {
      await dispatch(addToFavorites(id)).unwrap();
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };

  const handleRemoveFromFavorites = async (id) => {
    try {
      await dispatch(removeFromFavorites(id)).unwrap();
    } catch (error) {
      console.error('Error removing from favorites:', error);
    }
  };

  return (
    <div className={styles.wrap}>
      <h1 className={styles.header}>Popular Recipes</h1>
      <ul className={styles.popular}>
        {recipesPopular?.map(item => {
          const isFavorite = favorites.includes(item._id);
          return (
            <div key={item._id} className={styles.recipe_card}>
              <RecipeCard
                title={item.title}
                description={item.description}
                owner={item.owner}
                img={item.thumb}
                id={item._id}
                status={isFavorite} 
                handleAddToFavorites={handleAddToFavorites}
                handleRemoveFromFavorites={handleRemoveFromFavorites}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default PopularRecipes;
