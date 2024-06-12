import { useState, useEffect } from 'react';

import ListItems from '../../../components/ListItems';
import { TYPE_TABS, EMPTY_TEXT } from '../../../constants/common';
import { recipeApi } from '../../../services/Api';

const Favorites = () => {
  const [recipes, setRecipes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const onChangePage = page => {
    setPage(page);
  };

  const getRecipes = async () => {
    try {
      const { data } = await recipeApi.getFavoriteRecipes({ page, limit: 9 });
      setRecipes({
        total: 0,
        result: data?.avorites,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const onDeleteRecipe = async id => {
    try {
      await recipeApi.removeFromFavorites(id);
      setRecipes(prev => prev.filter(recipe => recipe._id !== id));
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
    />
  );
};

export default Favorites;
