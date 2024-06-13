import { RecipeCard } from '../../ui-kit';
// import recipes from './recipes.json';
import styles from './RecipeList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRecipesInCategory } from '../../redux/recipes/recipesOperations';
import { getRecipes } from '../../redux/recipes/recipesSelectors';
const RecipeList = ({ recipes }) => {
  // const recipes = useSelector(getRecipes);
  return (
    <>
      {recipes && (
        <ul className={styles.recipesList}>
          {recipes?.map((item, index) => {
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
      )}
    </>
  );
};
export default RecipeList;
