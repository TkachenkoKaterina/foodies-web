import { RecipeCard } from '../../ui-kit';
import recipes from './recipes.json';
const RecipeList = ({ user, category }) => {
  return (
    <ul key={category}>
      {recipes.map(item => {
        console.log(item.owner);
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
      })}
    </ul>
  );
};
export default RecipeList;
