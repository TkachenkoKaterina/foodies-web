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

const Recipes = ({
  category,
  onClick,
  recipes,
  currentPage,
  handleChange,
  itemsPerPage,
  onPageChange,
  total
}) => {
  // const total = useSelector(state => state.recipes.total);
  console.log(itemsPerPage, currentPage, onPageChange, total);
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
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={onPageChange}
            total={total}
          />
          {/* <RecipePagination onClick={onChangePage}/> */}
        </Container>
      )}
    </>
  );
};
export default Recipes;
