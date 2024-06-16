import { Container, Back, MainTitle, Subtitle } from '../../ui-kit';
import { useEffect, useState } from 'react';
import RecipeList from '../ResipeList';
import RecipeFilters from '../RecipeFilters';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesInCategory } from '../../redux/recipes/recipesOperations';
import { getRecipes } from '../../redux/recipes/recipesSelectors';
import { fetchIngredients } from '../../redux/ingredients/ingredientsOperatins';
import { fetchAreas } from '../../redux/areas/areasOperations';
import { selectIngredients } from '../../redux/ingredients/ingredientsSelectors';

const Recipes = ({ category, onClick, recipes, page, handleChange }) => {
  return (
    <>
      {category && (
        <Container>
          <Back icon="icon-arrow-left" onClick={onClick} />
          <MainTitle text={category} />
          <Subtitle text="Go on a taste journey, where every sip is a sophisticated creative chord, and every dessert is an expression of the most refined gastronomic desires." />
          <RecipeFilters
            handleChange={handleChange}
            // area={area}
            // ingredientId={ingredientId}
          />
          <RecipeList
            recipes={recipes}
            // area={area}
            // ingredientId={ingredientId}
          />
          {/* <RecipePagination onClick={onChangePage}/> */}
        </Container>
      )}
    </>
  );
};
export default Recipes;
