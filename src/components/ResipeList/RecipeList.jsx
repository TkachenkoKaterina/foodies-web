import { RecipeCard } from '../../ui-kit';
import recipes from './recipes.json';
import styles from './RecipeList.module.scss';
const RecipeList = ({ category }) => {
  return (
    <ul key={category} className={styles.recipesList}>
      {recipes.map((item, index) => {
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
  );
};
export default RecipeList;
