import { IconButton } from '..';
import { routes } from '../../constants/routes';
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({
  title,
  description,
  owner,
  img,
  id,
  navigatetoUserPage,
  navigateToSignIN,
  favoritesHendler,
}) => {
  const navigate = useNavigate();

  const goToRecipe = () => {
    navigate(getPathWithId(routes.recipe, recipe?.id));
  };
  const user = 'current user';
  return (
    <li key={id}>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <button
        type="button"
        onClick={user ? navigatetoUserPage : navigateToSignIN}
      >
        <img src={owner.awatar} alt="Avatar" />
        <p>{owner.name}</p>
      </button>
      <IconButton icon="icon-heart" onClick={favoritesHendler} />
      <IconButton icon="icon-arrow-up-right" onClick={goToRecipe} />
    </li>
  );
};
export default RecipeCard;
