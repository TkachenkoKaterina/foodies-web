import { useDispatch, useSelector } from 'react-redux';
import { RecipeCard } from '../../ui-kit';

import { getPopularRecipes } from '../../redux/recipes/recipesOperations';
import { getPopular } from '../../redux/recipes/recipesSelectors';
import { useEffect } from 'react';
const PopularRecipes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularRecipes());
  }, [dispatch]);

  const recipesPopular = useSelector(getPopular);

  return (
    <>
      <h1>Popular Recipes</h1>
      <ul>
        {recipesPopular?.map((item, index) => {
          return (
            <RecipeCard
              key={item._id + index}
              title={item.title}
              description={item.description}
              owner={item.owner}
              img={item.thumb}
              id={item._id}
            />
          );
        })}
      </ul>
    </>
  );
};
export default PopularRecipes;
