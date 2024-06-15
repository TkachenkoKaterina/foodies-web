import AddRecipeForm from '../../components/AddRecipeForm';
import PopularRecipes from '../../components/PopularRecipes';
import { routes } from '../../constants/routes';
import { Container, PathInfo } from '../../ui-kit';
import styles from './AddRecipePage.module.scss';

const AddRecipePage = () => {
  return (
    <div className={styles['add-recipe-page']}>
      <Container>
        <PathInfo path={routes.addRecipe} />
        <AddRecipeForm />
      </Container>
    </div>
  );
};

export default AddRecipePage;
