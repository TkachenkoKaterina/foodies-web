import { RecipeCard } from '../../ui-kit';
import recipes from './recipes.json';
const RecipeList = ({ user, category }) => {
  return (
    <ul>
      {recipes.map((title, description, owner, img, _id) => {
        return (
          <RecipeCard
            key={_id}
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
export default RecipeList;
