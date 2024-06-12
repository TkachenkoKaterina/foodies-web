import { IconButton, MainTitle, Subtitle } from '../../ui-kit';
import { useEffect, useState } from 'react';
import RecipeList from '../ResipeList';
import RecipeFilters from '../RecipeFilters';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesInCategory } from '../../redux/recipes/recipesOperations';
import { getRecipes } from '../../redux/recipes/recipesSelectors';

const Recipes = ({ category = 'Dessert' }) => {
  const [isRender, setIsRender] = useState(category);
  const params = {};
  const goToCategory = e => {
    e.preventDefault();
    setIsRender(false);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesInCategory(category, params));
  }, [dispatch]);
  const recipes = useSelector(getRecipes);
  return (
    <>
      {isRender && (
        <div className="">
          <IconButton icon="icon-arrow-left" onClick={goToCategory} />
          <MainTitle text={category} />
          <Subtitle text="Go on a taste journey, where every sip is a sophisticated creative chord, and every dessert is an expression of the most refined gastronomic desires." />
          <RecipeFilters />
          <RecipeList recipes={recipes} />
          {/* <RecipePagination/> */}
        </div>
      )}
    </>
  );
};
export default Recipes;
