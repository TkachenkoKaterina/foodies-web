import React from 'react';
import RecipeMainInfo from '../RecipeMainInfo/RecipeMainInfo';
import { useNavigate } from 'react-router-dom';

const RecipeInfo = ({
  recipe,
  handleAddToFavorites,
  handleRemoveFromFavorites,
  status,
}) => {
  return (
    <RecipeMainInfo
      recipe={recipe}
      // handleAddToFavorites={handleAddToFavorites}
      // handleRemoveFromFavorites={handleRemoveFromFavorites}
      // status={status}
    />
  );
};

export default RecipeInfo;
