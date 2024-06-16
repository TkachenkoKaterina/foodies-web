import Hero from '../../components/Hero';
import Recipes from '../../components/Recipes';
import Categories from '../../components/Categories';
import Testimonials from '../../components/Testimonials';
import styles from './HomePage.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIngredients } from '../../redux/ingredients/ingredientsSelectors';
import { fetchIngredients } from '../../redux/ingredients/ingredientsOperatins';
import { fetchAreas } from '../../redux/areas/areasOperations';
import { getRecipesInCategory } from '../../redux/recipes/recipesOperations';
import {
  filterSelector,
  getRecipes,
} from '../../redux/recipes/recipesSelectors';
import { filter } from '../../redux/recipes/recipesSlice';

const HomePage = () => {
  const [category, setCategory] = useState('');
  console.log('ctegory', category);
  const [page, setPage] = useState(1);
  const ingredientsList = useSelector(selectIngredients);
  const limit = 12;
  const dispatch = useDispatch();
  const [ingredientId, setIngredientId] = useState(null);
  const [area, setArea] = useState(null);
  const recipes = useSelector(getRecipes);
  const filterFromRedux = useSelector(filterSelector);
  console.log('filter from redux --->', filterFromRedux);
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
    dispatch(getRecipesInCategory(category, filterFromRedux));
  }, [dispatch, category, area, ingredientId, page]);

  const handleChange = event => {
    if (!event.nativeEvent.inputType) {
      event.target.blur();
    }
    if (event.nativeEvent.target.id === 'Area') {
      setArea(event.nativeEvent.target.value);
      dispatch(
        filter({
          ingredient: ingredientId,
          area: event.nativeEvent.target.value,
          page: page,
          limit: limit,
        })
      );
    } else {
      const ing = ingredientsList?.find(
        item => item.name === event.currentTarget.value
      );
      setIngredientId(ing?._id);
      dispatch(
        filter({
          ingredient: ing?._id,
          area: area,
          page: page,
          limit: limit,
        })
      );
    }
  };
  console.log(area);
  console.log(ingredientId);

  const handlerCategoryChoose = name => {
    setCategory(name);
  };

  const goToCategory = () => {
    setCategory(false);
  };

  return (
    <>
      <Hero />
      {!category && (
        <Categories handlerCategoryChoose={handlerCategoryChoose} />
      )}
      {category && (
        <Recipes
          category={category}
          onClick={goToCategory}
          handleChange={handleChange}
          recipes={recipes}
          // area={area}
          // ingredient={ingredientId}
          // areaHandler={areaHandler}
          // ingredientIdHendler={ingredientIdHendler}
        />
      )}

      {<Testimonials />}
    </>
  );
};

export default HomePage;
