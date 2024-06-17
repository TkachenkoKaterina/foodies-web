import { useDispatch, useSelector } from 'react-redux';
import { Back } from '..';
import { routes } from '../../constants/routes';
import { useNavigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { getImagePath } from '../../helpers/getImagePath';
import { getPathWithId } from '../../helpers/getPathWithId';
import styles from './RecipeCard.module.scss';
import { MODAL_TYPES } from '../../constants/common';
import { openModal } from '../../redux/modal/modalSlice';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

const RecipeCard = ({
  title,
  description,
  owner,
  img,
  id,
  status,
  handleAddToFavorites,
  handleRemoveFromFavorites,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const goToRecipe = () => {
    navigate(getPathWithId(routes.recipe, id));
  };
  const userOpenHendler = () => {
    if (isLoggedIn) {
      navigate(`/user/${owner._id}`);
    } else {
      dispatch(openModal({ modalType: MODAL_TYPES.LOGIN, modalProps: {} }));
    }
  };

  return (
    <li key={id} className={styles.card}>
      <img src={getImagePath(img)} alt={title} className={styles.img} />
      <h3 className={styles.title}>
        {title.slice(0, 25)}
        {title.length > 25 && <span>...</span>}
      </h3>
      <p className={styles.description}>{description.slice(0, 75)}...</p>
      <div className={styles.cardFooter}>
        <button
          className={styles.ownerInfo}
          type="button"
          onClick={userOpenHendler}
        >
          <img
            className={styles.avatar}
            src={getImagePath(owner?.avatar)}
            alt="Avatar"
          />
          <p className={styles.name}>{owner?.name}</p>
        </button>
        <div className={styles.actionsBlock}>
          {isLoggedIn && status && (
            <Back
              icon="icon-heart"
              fill="red"
              onClick={() => handleRemoveFromFavorites(id)}
            />
          )}
          {isLoggedIn && !status && (
            <Back icon="icon-heart" onClick={() => handleAddToFavorites(id)} />
          )}

          <Back
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
