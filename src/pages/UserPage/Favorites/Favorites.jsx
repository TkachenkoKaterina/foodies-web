import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ListItems from '../../../components/ListItems';
import { TYPE_TABS, EMPTY_TEXT } from '../../../constants/common';
import { recipeApi } from '../../../services/Api';
import { authReducer } from '../../../redux/auth';

const Favorites = () => {
  const dispatch = useDispatch();
  const [recipes, setRecipes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;

  const onChangePage = ({ selected }) => {
    setPage(selected + 1);
  };

  const getRecipes = async () => {
    try {
      const { data } = await recipeApi.getFavoriteRecipes({
        page,
        limit: itemsPerPage,
      });
      setRecipes(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRecipes();
  }, [page]);

  const onDeleteRecipe = async id => {
    try {
      await recipeApi.removeFromFavorites(id);
      setRecipes(prev => ({
        ...prev,
        result: prev.result.filter(recipe => recipe._id !== id),
      }));
      await dispatch(
        authReducer.updateUserProfile({ key: 'favorites', value: -1 })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ListItems
      emptyText={EMPTY_TEXT.FAVORITES}
      currentPage={1}
      onCurrentPageChange={() => {}}
      type={TYPE_TABS.RECIPE}
      isOwner={true}
      data={recipes}
      isLoading={isLoading}
      onDeleteRecipe={onDeleteRecipe}
      page={page}
      onChangePage={onChangePage}
      itemsPerPage={itemsPerPage}
    />
  );
};

export default Favorites;
