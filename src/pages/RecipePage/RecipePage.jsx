import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PathInfo from '../../ui-kit/PathInfo';
import RecipeInfo from '../../components/RecipeInfo';
import PopularRecipes from '../../components/PopularRecipes';
import styles from './RecipePage.module.scss';
import { Container } from '../../ui-kit';
import { recipeApi } from '../../services/Api.js';
import { PageLoader } from '../../ui-kit/Loader';

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await recipeApi.getRecipes(`public/${id}`);
        setRecipe(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

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
      <div className={styles.cont} >
      <PathInfo path={recipe.title} />
      <RecipeInfo recipe={recipe} />
      <PopularRecipes />
      </div>
    </Container>
  );
};

export default RecipePage;
