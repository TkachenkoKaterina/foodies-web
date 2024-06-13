import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PathInfo from '../../ui-kit/PathInfo';
import RecipeInfo from '../../components/RecipeInfo';
import PopularRecipes from '../../components/PopularRecipes/PopularRecipes';

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `https://foodies-1u0q.onrender.com/api/recipes/public/${id}`
        );
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <>
      <PathInfo path={recipe.title} />
      <RecipeInfo recipe={recipe} />
      <PopularRecipes />
    </>
  );
};

export default RecipePage;
