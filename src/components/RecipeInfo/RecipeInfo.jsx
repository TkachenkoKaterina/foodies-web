import React from 'react';
import RecipeMainInfo from '../RecipeMainInfo/RecipeMainInfo';
import { useNavigate } from 'react-router-dom';

const RecipeInfo = ({ recipe }) => {

  return (
    <RecipeMainInfo
      recipe={recipe}
    />
  );
};

export default RecipeInfo;