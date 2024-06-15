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

const HomePage = () => {
  const [category, setCategory] = useState('');
  // const [ingredientId, setIngredientId] = useState(null);
  // const [area, setArea] = useState(null);
  // const ingredientsList = useSelector(selectIngredients);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchIngredients());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchAreas());
  // }, [dispatch]);

  const handlerCategoryChoose = name => {
    setCategory(name);
  };

  const goToCategory = () => {
    setCategory(false);
  };

  // const areaHandler = name => {
  //   console.log(name);
  //   console.log('areaHandler');
  //   setArea(area);
  // };
  // const ingredientIdHendler = name => {
  //   const ing = ingredientsList?.find(
  //     item => item.name === event.currentTarget.value
  //   );
  //   setIngredientId(ing?._id);
  // };

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
