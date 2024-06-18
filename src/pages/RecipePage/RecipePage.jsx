import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PathInfo from '../../ui-kit/PathInfo';
import RecipeInfo from '../../components/RecipeInfo';
import PopularRecipes from '../../components/PopularRecipes';
import styles from './RecipePage.module.scss';
import { Container } from '../../ui-kit';
import { recipesApi } from '../../services/Api.js';
import { PageLoader } from '../../ui-kit/Loader';
import {
  addToFavorites,
  getFavoritesList,
  removeFromFavorites,
} from '../../redux/favorites/favoritesOperations.js';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from '../../redux/favorites/favoritesSelector.js';
import { getIsLoggedIn, getUser } from '../../redux/auth/authSelectors.js';
import RecipeDetailsFavButton from '../../components/RecipeDetailsFavButton/RecipeDetailsFavButton.jsx';

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = useSelector(getUser);
  const recipesFavList = useSelector(getFavorites);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await recipesApi.getRecipe(id);
        setRecipe(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

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
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };

  const handleRemoveFromFavorites = async id => {
    try {
      await dispatch(removeFromFavorites(id)).unwrap();
    } catch (error) {
      console.error('Error removing from favorites:', error);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <Container>
      <div className={styles.cont}>
        <PathInfo path={recipe.title} />
        <RecipeInfo recipe={recipe} />
        <RecipeDetailsFavButton recipeId={id} favorites={recipesFavList} />
        <PopularRecipes
          handleAddToFavorites={handleAddToFavorites}
          handleRemoveFromFavorites={handleRemoveFromFavorites}
          recipesFavList={recipesFavList}
        />
      </div>
    </Container>
  );
};

export default RecipePage;
