import { RecipeCard } from './RecipeCard';
import recipes from './recipes.json';
export const RecipeList = ({ user, category }) => {
  return (
    <ul>
      {recipes.map((title, description, owner, img, _id) => {
        return (
          <RecipeCard
            title={title}
            description={description}
            owner={owner}
            img={img}
            id={_id}
          />
        );
      })}
    </ul>
  );
};
