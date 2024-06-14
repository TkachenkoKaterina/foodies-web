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
  const areasSelected = document.getElementById('Area');
  console.log(areasSelected);
  const [isRender, setIsRender] = useState(category);
  const [ingredientId, setIngredientId] = useState(null);
  const [area, setArea] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const ingredientsList = useSelector(selectIngredients);

  const onChangePage = page => {
    setPage(page);
  };

  const dispatch = useDispatch();

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

  const recipes = useSelector(getRecipes);
  const hendleAreaChoose = e => {
    e.preventDefault();
    console.log(e.curentTarget);
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
  // const areaName = areasSelected?.options[areasSelected.selectedIndex].value;
  // console.group(areaName);
  const selectHendler = event => {
    event.target.value = '';
    if (event.target.id === 'Area') {
      setArea(event.currentTarget.value);
    }
  };

  const handleChange = event => {
    if (event.currentTarget.id === 'Area') {
      setArea(event.currentTarget.value);
    }
    if (event.currentTarget.id === 'Ingredients') {
      const ing = ingredientsList.find(
        item => item.name === event.currentTarget.value
      );

      setIngredientId(ing._id);
    }
    if (!event.nativeEvent.inputType) {
      event.target.blur();
    }
  };

  return (
    <>
      {isRender && (
        <Container>
          <IconButton icon="icon-arrow-left" onClick={onClick} />
          <MainTitle text={category} />
          <Subtitle text="Go on a taste journey, where every sip is a sophisticated creative chord, and every dessert is an expression of the most refined gastronomic desires." />
          <RecipeFilters
            // hendleAreaChoose={hendleAreaChoose}
            selectHendler={selectHendler}
            handleChange={handleChange}
          />
          <RecipeList recipes={recipes} />
          {/* <RecipePagination onClick={onChangePage}/> */}
        </Container>
      )}
    </>
  );
};
export default Recipes;
