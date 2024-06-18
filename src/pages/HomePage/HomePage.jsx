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
  totalSelector,
} from '../../redux/recipes/recipesSelectors';
import { filter } from '../../redux/recipes/recipesSlice';

const HomePage = () => {
  const widthWindow = window.innerWidth;
  console.log(widthWindow);
  const [category, setCategory] = useState('');

  const [page, setPage] = useState(1);
  const ingredientsList = useSelector(selectIngredients);
  let limit;
  if (widthWindow < 768) {
    limit = 9;
  } else {
    limit = 12;
  }
  const dispatch = useDispatch();
  const [ingredientId, setIngredientId] = useState(null);
  const [area, setArea] = useState(null);
  const recipes = useSelector(getRecipes);
  const filterFromRedux = useSelector(filterSelector);

  const total = useSelector(totalSelector);

  const onPageChange = page => {
    setPage(page.selected + 1);
    dispatch(
      filter({
        ingredient: ingredientId,
        area: area,
        page: page.selected + 1,
        limit: limit,
      })
    );
  };

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAreas());
  }, [dispatch]);

  // const getRecipes = () => {
  //   dispatch(getRecipesInCategory({ category, params: filterFromRedux }));
  // }

  useEffect(() => {
    if (category) {
      dispatch(getRecipesInCategory({ category, params: filterFromRedux }));
    }
  }, [dispatch, category, area, ingredientId, page, widthWindow]);

  const handleChange = event => {
    if (!event.nativeEvent.inputType) {
      event.target.blur();
    }
    if (event.nativeEvent.target.id === 'Area') {
      setArea(event.nativeEvent.target.value);
      setPage(1);
      dispatch(
        filter({
          ingredient: ingredientId,
          area: event.nativeEvent.target.value,
          page: 1,
          limit: limit,
        })
      );
    } else {
      const ing = ingredientsList?.find(
        item => item.name === event.currentTarget.value
      );
      setIngredientId(ing?._id);
      setPage(1);
      dispatch(
        filter({
          ingredient: ing?._id,
          area: area,
          page: 1,
          limit: limit,
        })
      );
    }
  };

  const handlerCategoryChoose = name => {
    setCategory(name);
  };

  const goToCategory = () => {
    setCategory(false);
    setPage(1);
    setIngredientId('');
    setArea('');
    dispatch(
      filter({
        ingredient: '',
        area: '',
        page: 1,
        limit: limit,
      })
    );
  };

  return (
    <>
      <Hero />
      {!category && (
        <Categories handlerCategoryChoose={handlerCategoryChoose} />
      )}
      {category && recipes && (
        <Recipes
          category={category}
          onClick={goToCategory}
          handleChange={handleChange}
          recipes={recipes}
          itemsPerPage={limit}
          currentPage={page}
          onPageChange={onPageChange}
          total={total}
        />
      )}

      <div className={styles.testimonials_wrap}>{<Testimonials />}</div>
    </>
  );
};

export default HomePage;
