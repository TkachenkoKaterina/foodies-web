import { ListPagination, RecipeCard, RecipePagination } from '../../ui-kit';
// import recipes from './recipes.json';
import styles from './RecipeList.module.scss';

import { useEffect, useState } from 'react';
import { recipeApi } from '../../services/Api';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn, getUser } from '../../redux/auth/authSelectors';
import { getFavorites } from '../../redux/favorites/favoritesSelector';
import {
  addToFavorites,
  getFavoritesList,
  removeFromFavorites,
} from '../../redux/favorites/favoritesOperations';
const RecipeList = ({
  recipes,
  itemsPerPage,
  currentPage,
  onPageChange,
  total,
}) => {
  const recipesFavList = useSelector(getFavorites);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const [loading, setIsLoading] = useState('true');
  const userId = useSelector(getUser);
  const dispatch = useDispatch();
  // const [status, setStatus] = useState('');

  // console.log(isFavorite);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    } else {
      dispatch(getFavoritesList(userId._id));
    }
  }, [dispatch]);

  const handleAddToFavorites = async id => {
    try {
      await dispatch(addToFavorites(id)).unwrap();
      // setStatus(true);
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };

  const handleRemoveFromFavorites = async id => {
    try {
      await dispatch(removeFromFavorites(id)).unwrap();
      // setStatus(false);
    } catch (error) {
      console.error('Error removing from favorites:', error);
    }
  };

  // const handleAddToFavorites = async id => {
  //   try {
  //     await recipeApi.addToFavorites(id);
  //     getFavRecipesList();
  //   } catch (error) {
  //     console.error('Error adding to favorites:', error);
  //   }
  // };

  // const handleRemoveFromFavorites = async id => {
  //   try {
  //     await recipeApi.removeFromFavorites(id);
  //     getFavRecipesList();
  //   } catch (error) {
  //     console.error('Error removing from favorites:', error);
  //   }
  // };

  return (
    <div className={styles.recipesListContainer}>
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
    </div>
  );
};
export default RecipeList;
