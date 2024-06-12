import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ListItems from '../../../components/ListItems';
import { TYPE_TABS, EMPTY_TEXT } from '../../../constants/common';
import { recipeApi } from '../../../services/Api';
import { useOwner } from '../../../hooks/user';

const Recipes = () => {
  const { id } = useParams();
  const [recipes, setRecipes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const owner = useOwner();
  const [page, setPage] = useState(1);

  const onChangePage = page => {
    setPage(page);
  };

  const getRecipes = async () => {
    try {
      const { data } = await recipeApi.getRecipes(id, { page, limit: 9 });
      setRecipes(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;

    getRecipes();
  }, [id]);

  const onDeleteRecipe = async id => {
    try {
      await recipeApi.deleteRecipe(id);
      setRecipes(prev => ({
        ...prev,
        result: prev.result.filter(recipe => recipe._id !== id),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ListItems
      emptyText={EMPTY_TEXT.RECIPES}
      currentPage={1}
      onCurrentPageChange={() => {}}
      data={recipes}
      type={TYPE_TABS.RECIPE}
      onDeleteRecipe={onDeleteRecipe}
      isOwner={owner?._id === id}
      isLoading={isLoading}
      page={page}
      onChangePage={onChangePage}
    />
  );
};

export default Recipes;
