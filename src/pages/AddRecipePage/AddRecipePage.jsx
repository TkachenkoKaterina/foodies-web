import AddRecipeForm from '../../components/AddRecipeForm';
import PopularRecipes from '../../components/PopularRecipes';
import { routes } from '../../constants/routes';
import { Container, PathInfo } from '../../ui-kit';

const AddRecipePage = () => {
  return (
    <>
      <Container>
        <PathInfo path={routes.addRecipe} />
        <AddRecipeForm />
        <PopularRecipes />
      </Container>
    </>
  );
};

export default AddRecipePage;
