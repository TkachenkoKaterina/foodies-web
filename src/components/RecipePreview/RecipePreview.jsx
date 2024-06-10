import { useNavigate } from 'react-router-dom';

import styles from './RecipePreview.module.scss';
import { IconButton } from '../../ui-kit';
import { routes } from '../../constants/routes';
import { getPathWithId } from '../../helpers/getPathWithId';

const RecipePreview = ({ isOwner, recipe, onDeleteRecipe }) => {
  const navigate = useNavigate();

  const goToRecipe = () => {
    navigate(getPathWithId(routes.recipe, recipe?.id));
  };

  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <img src={recipe.img} alt="recipe" />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{recipe?.title}</p>
        <p className={styles.descr}>{recipe?.decription}</p>
      </div>
      <div className={styles.buttons}>
        <IconButton icon="icon-arrow-up-right" onClick={goToRecipe} />

        {isOwner && (
          <IconButton
            icon="icon-trash"
            onClick={() => onDeleteRecipe(recipe.id)}
          />
        )}
      </div>
    </div>
  );
};

export default RecipePreview;
