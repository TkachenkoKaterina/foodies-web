import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import ListItems from '../../../components/ListItems';
import { TYPE_TABS, EMPTY_TEXT } from '../../../constants/common';
import { recipeApi } from '../../../services/Api';
import { useOwner } from '../../../hooks/user';
import { authReducer } from '../../../redux/auth';

const Recipes = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [recipes, setRecipes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const owner = useOwner();
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;

  const onChangePage = ({ selected }) => {
    setPage(selected + 1);
  };

  const getRecipes = async () => {
    try {
      const { data } = await recipeApi.getRecipes(id, {
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
    if (!id) return;

    getRecipes();
  }, [id, page]);

  const onDeleteRecipe = async id => {
    try {
      await recipeApi.deleteRecipe(id);
      setRecipes(prev => ({
        ...prev,
        result: prev.result.filter(recipe => recipe._id !== id),
      }));
      await dispatch(
        authReducer.updateUserProfile({ key: 'recipes', value: -1 })
      );
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
      itemsPerPage={itemsPerPage}
    />
  );
};

export default Recipes;
