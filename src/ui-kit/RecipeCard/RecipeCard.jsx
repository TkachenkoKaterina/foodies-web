import { useSelector } from 'react-redux';
import { IconButton } from '..';
import { routes } from '../../constants/routes';
import { useNavigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import getImagePath from '../../helpers/getImagePath';

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
  const isLoggedIn = useSelector(getIsLoggedIn);
  const goToRecipe = () => {
    navigate(getPathWithId(routes.recipe, recipe?.id));
  };

  return (
    <li key={id}>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <button
        type="button"
        onClick={isLoggedIn ? navigatetoUserPage : navigateToSignIN}
      >
        <img src={getImagePath(owner.avatar)} alt="Avatar" />
        <p>{owner.name}</p>
      </button>
      <IconButton icon="icon-heart" onClick={favoritesHendler} />
      <IconButton icon="icon-arrow-up-right" onClick={goToRecipe} />
    </li>
  );
};
export default RecipeCard;
