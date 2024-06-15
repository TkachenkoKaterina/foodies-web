import { Container, IconButton, MainTitle, Subtitle } from '../../ui-kit';
import { useEffect, useState } from 'react';
import RecipeList from '../ResipeList';
import RecipeFilters from '../RecipeFilters';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesInCategory } from '../../redux/recipes/recipesOperations';
import { getRecipes } from '../../redux/recipes/recipesSelectors';
import { fetchIngredients } from '../../redux/ingredients/ingredientsOperatins';
import { fetchAreas } from '../../redux/areas/areasOperations';
import { selectIngredients } from '../../redux/ingredients/ingredientsSelectors';

const Recipes = ({ category, onClick }) => {
  const [page, setPage] = useState(1);
  const ingredientsList = useSelector(selectIngredients);

  const dispatch = useDispatch();
  const [ingredientId, setIngredientId] = useState(null);

  const [area, setArea] = useState(null);

  const recipes = useSelector(getRecipes);
  const onChangePage = page => {
    setPage(page);
  };

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAreas());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getRecipesInCategory(category, {
        ingredient: ingredientId,
        area: area,
        page: page,
        limit: 12,
      })
    );
  }, [dispatch, category, area, ingredientId]);

  const handleChange = event => {
    console.log(event.nativeEvent.target.id);
    if (!event.nativeEvent.inputType) {
      event.target.blur();
    }
    if (event.nativeEvent.target.id === 'Area') {
      setArea(event.nativeEvent.target.value);
    } else {
      const ing = ingredientsList?.find(
        item => item.name === event.currentTarget.value
      );
      setIngredientId(ing?._id);
    }
  };
  console.log(area);
  console.log(ingredientId);
  return (
    <>
      {category && (
        <Container>
          <IconButton icon="icon-arrow-left" onClick={onClick} />
          <MainTitle text={category} />
          <Subtitle text="Go on a taste journey, where every sip is a sophisticated creative chord, and every dessert is an expression of the most refined gastronomic desires." />
          <RecipeFilters handleChange={handleChange} />
          <RecipeList recipes={recipes} />
          {/* <RecipePagination onClick={onChangePage}/> */}
        </Container>
      )}
    </>
  );
};
export default Recipes;
