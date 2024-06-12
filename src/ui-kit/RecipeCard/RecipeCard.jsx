import { useSelector } from 'react-redux';
import { IconButton } from '..';
import { routes } from '../../constants/routes';
import { useNavigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import getImagePath from '../../helpers/getImagePath';
import styles from './RecipeCard.module.scss';

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
    navigate(getPathWithId(routes.recipes, recipe?.id));
  };

  return (
    <li key={id} className={styles.card}>
      <img src={getImagePath(img)} alt={title} className={styles.img} />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description.slice(0, 80)}...</p>
      <div className={styles.cardFooter}>
        <button
          className={styles.ownerInfo}
          type="button"
          onClick={isLoggedIn ? navigatetoUserPage : navigateToSignIN}
        >
          <img
            className={styles.avatar}
            src={getImagePath(owner.avatar)}
            alt="Avatar"
          />
          <p className={styles.name}>{owner.name}</p>
        </button>
        <div className={styles.actionsBlock}>
          <IconButton icon="icon-heart" onClick={favoritesHendler} />
          <IconButton
            className={styles.heardBtn}
            icon="icon-arrow-up-right"
            onClick={goToRecipe}
          />
        </div>
      </div>
    </li>
  );
};
export default RecipeCard;
