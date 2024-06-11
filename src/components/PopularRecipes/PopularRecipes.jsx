import { RecipeCard } from '../../ui-kit';
import recipes from '../ResipeList/recipes.json';
const PopularRecipes = () => {
  return (
    <>
      <h1>Popular Recipes</h1>
      <ul key="popular">
        {recipes.map(item, index => {
          do {
            return (
              <RecipeCard
                key={item._id}
                title={item.title}
                description={item.description}
                owner={item.owner}
                img={item.img}
                id={item._id}
              />
            );
          } while (index < 4);
        })}
      </ul>
    </>
  );
};
export default PopularRecipes;
