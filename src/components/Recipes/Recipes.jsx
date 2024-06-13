import { Container, IconButton, MainTitle, Subtitle } from '../../ui-kit';
import { useEffect, useState } from 'react';
import RecipeList from '../ResipeList';
import RecipeFilters from '../RecipeFilters';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesInCategory } from '../../redux/recipes/recipesOperations';
import { getRecipes } from '../../redux/recipes/recipesSelectors';

const Recipes = ({ category, onClick }) => {
  const areasSelect = document.getElementById('Area');
  console.log(areasSelect);
  const [isRender, setIsRender] = useState(category);
  const [ingredientId, setIngredientId] = useState('');
  const [area, setArea] = useState('');
  const params = {
    area: area,
    ingredient: ingredientId,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesInCategory(category, params));
  }, [dispatch, category]);
  const recipes = useSelector(getRecipes);

  const hendleAreaChoose = e => {
    e.preventDefault();
    const selection = e.target.value.substring(
      e.target.selectionStart,
      e.target.selectionEnd
    );
    console.log(selection);

    if (e.target.id === 'Area') {
      console.log(e.targer);
      // setCategory(e.target.);
    }
  };
  areasSelect?.addEventListener('select', hendleAreaChoose);
  return (
    <>
      {isRender && (
        <Container>
          <IconButton icon="icon-arrow-left" onClick={onClick} />
          <MainTitle text={category} />
          <Subtitle text="Go on a taste journey, where every sip is a sophisticated creative chord, and every dessert is an expression of the most refined gastronomic desires." />
          <RecipeFilters hendleAreaChoose={hendleAreaChoose} />
          <RecipeList recipes={recipes} />
          {/* <RecipePagination/> */}
        </Container>
      )}
    </>
  );
};
export default Recipes;
