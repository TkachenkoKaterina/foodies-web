import { Container, IconButton, MainTitle, Subtitle } from '../../ui-kit';
import { useEffect, useState } from 'react';
import RecipeList from '../ResipeList';
import RecipeFilters from '../RecipeFilters';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesInCategory } from '../../redux/recipes/recipesOperations';
import { getRecipes } from '../../redux/recipes/recipesSelectors';

const Recipes = ({ category, onClick }) => {
  const [isRender, setIsRender] = useState(category);
  const params = {};
  // const goToCategory = e => {
  //   e.preventDefault();
  //   setIsRender(false);
  // };
  const dispatch = useDispatch();
  console.log(category);
  useEffect(() => {
    dispatch(getRecipesInCategory(category, params));
  }, [dispatch, category]);
  const recipes = useSelector(getRecipes);

  return (
    <>
      {isRender && (
        <Container>
          <IconButton icon="icon-arrow-left" onClick={onClick} />
          <MainTitle text={category} />
          <Subtitle text="Go on a taste journey, where every sip is a sophisticated creative chord, and every dessert is an expression of the most refined gastronomic desires." />
          <RecipeFilters />
          <RecipeList recipes={recipes} />
          {/* <RecipePagination/> */}
        </Container>
      )}
    </>
  );
};
export default Recipes;
