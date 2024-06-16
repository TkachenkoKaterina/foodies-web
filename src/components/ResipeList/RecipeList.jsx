import { RecipeCard } from '../../ui-kit';
// import recipes from './recipes.json';
import styles from './RecipeList.module.scss';

import { useEffect, useState } from 'react';
import { recipeApi } from '../../services/Api';
const RecipeList = ({ recipes }) => {
  // const recipes = useSelector(getRecipes);
  const [recipesFavList, setRecipesFavList] = useState(null);
  const [status, setStatus] = useState(false);
  const [loading, setIsLoading] = useState('true');
  const getFavRecipesList = async () => {
    try {
      const { data } = await recipeApi.getFavoriteRecipes();
      setRecipesFavList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getFavRecipesList();
  }, [status, recipes]);

  const handleAddToFavorites = async id => {
    try {
      await recipeApi.addToFavorites(id);
      setStatus(true);
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };

  const handleRemoveFromFavorites = async id => {
    try {
      await recipeApi.removeFromFavorites(id);
      setStatus(false);
    } catch (error) {
      console.error('Error removing from favorites:', error);
    }
  };

  return (
    <>
      {recipes && (
        <ul className={styles.recipesList}>
          {recipes?.map((item, index) => {
            const status = recipesFavList?.find(
              favItem => favItem._id === item.id
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
              />
            );
          })}
        </ul>
      )}
    </>
  );
};
export default RecipeList;
