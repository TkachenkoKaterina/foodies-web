import { RecipeCard } from '../../ui-kit';
import recipes from '../ResipeList/recipes.json';
const PopularRecipes = () => {
  const mostPopular = recipes.slice(0, 4);
  return (
    <>
      <h1>Popular Recipes</h1>
      <ul>
        {mostPopular.map((item, index) => {
          return (
            <RecipeCard
              key={item._id + index}
              title={item.title}
              description={item.description}
              owner={item.owner}
              img={item.img}
              id={item._id}
            />
          );
        })}
      </ul>
    </>
  );
};
export default PopularRecipes;
