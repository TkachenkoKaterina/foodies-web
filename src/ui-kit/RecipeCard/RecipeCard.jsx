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
import { useEffect, useState } from 'react';
import { recipeApi } from '../../services/Api';

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

  const [isFavorite, setIsFavorite] = useState(status);

  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      try {
        const response = await recipeApi.getRecipes(id);
        setIsFavorite(response.data.isFavorite);
      } catch (error) {
        console.error('Error fetching favorite status:', error);
      }
    };

    fetchFavoriteStatus();
  }, [id]);

  return (
    <li key={id} className={styles.card}>
      <img src={getImagePath(img)} alt={title} className={styles.img} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description.slice(0, 70)}...</p>
      <div className={styles.cardFooter}>
        <button
          className={styles.ownerInfo}
          type="button"
          onClick={userOpenHendler}
        >
          <img
            className={styles.avatar}
            src={getImagePath(owner.avatar)}
            alt="Avatar"
          />
          <p className={styles.name}>{owner.name}</p>
        </button>
        <div className={styles.actionsBlock}>
          {isLoggedIn && isFavorite ? (
            <Back
              icon="icon-heart"
              fill="red"
              onClick={() => handleRemoveFromFavorites(id)}
            />
          ) : (
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

////  const [isFavorite, setIsFavorite] = useState(false);

//   useEffect(() => {
//     const fetchFavoriteStatus = async () => {
//       try {
//         const response = await recipeApi.getRecipes(recipeId);
//         setIsFavorite(response.data.isFavorite);
//       } catch (error) {
//         console.error('Error fetching favorite status:', error);
//       }
//     };

//     fetchFavoriteStatus();
//   }, [recipeId]);

//   const handleAddToFavorites = async (id) => {
//     try {
//       await recipeApi.addToFavorites(id);
//       setIsFavorite(true);
//     } catch (error) {
//       console.error('Error adding to favorites:', error);
//     }
//   };

//   const handleRemoveFromFavorites = async (id) => {
//     try {
//       await recipeApi.removeFromFavorites(id);
//       setIsFavorite(false);
//     } catch (error) {
//       console.error('Error removing from favorites:', error);
//     }
//   };

//   return (
//     <div>
//       {isFavorite ? (
//         <button type="button" className={styles.favButton} onClick={handleRemoveFromFavorites}>Remove from favorites</button>
//       ) : (
//         <button className={styles.favButton} type="button" onClick={handleAddToFavorites}>Add to favorites</button>
//       )}
//     </div>
//   );
// };
