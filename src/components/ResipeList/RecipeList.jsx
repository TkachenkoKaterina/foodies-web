import { ListPagination, RecipeCard, RecipePagination } from '../../ui-kit';
// import recipes from './recipes.json';
import styles from './RecipeList.module.scss';

import { useEffect, useState } from 'react';
import { recipeApi } from '../../services/Api';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
const RecipeList = ({
  recipes,
  itemsPerPage,
  currentPage,
  onPageChange,
  total,
}) => {
  const [recipesFavList, setRecipesFavList] = useState([]);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const [loading, setIsLoading] = useState('true');

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
    getFavRecipesList();
  }, []);

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
      {recipes && (
        <ul className={styles.recipesList}>
          {recipes?.map((item, index) => {
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
      )}
      {total > 12 && (
        <RecipePagination
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={onPageChange}
          total={total}
        />
      )}
    </>
  );
};
export default RecipeList;
