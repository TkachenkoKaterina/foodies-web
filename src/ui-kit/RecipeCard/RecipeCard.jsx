import { useSelector } from 'react-redux';
import { Back } from '..';
import { routes } from '../../constants/routes';
import { useNavigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { getImagePath } from '../../helpers/getImagePath';
import { getPathWithId } from '../../helpers/getPathWithId';
import styles from './RecipeCard.module.scss';
import SignInModal from '../../components/SignInModal/SignInModal';

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
    // console.log(id);
    navigate(getPathWithId(routes.recipe, id));
  };

  const goUserProfile = () => {
    if (isLoggedIn) {
      navigate(getPathWithId(routes.user, owner._id));
    } else {
      console.log('sorry go to modal');
    }

    // if (!isLoggedIn) {
    //   navigate(getPathWithId(routes.user, owner));
    // }
  };

  return (
    <li key={id} className={styles.card}>
      <img src={getImagePath(img)} alt={title} className={styles.img} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description.slice(0, 70)}...</p>
      <div className={styles.cardFooter}>
        <button
          className={styles.ownerInfo}
          type="button"
          // onClick={
          //   isLoggedIn
          //     ? goUserProfile
          //     : () => {
          //         return <SignInModal />;
          //       }
          // }
          onClick={goUserProfile}
        >
          <img
            className={styles.avatar}
            src={getImagePath(owner.avatar)}
            alt="Avatar"
          />
          <p className={styles.name}>{owner.name}</p>
        </button>
        <div className={styles.actionsBlock}>
          <Back icon="icon-heart" onClick={favoritesHendler} />
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

//   const handleAddToFavorites = async () => {
//     try {
//       await recipeApi.addToFavorites(recipeId);
//       setIsFavorite(true);
//     } catch (error) {
//       console.error('Error adding to favorites:', error);
//     }
//   };

//   const handleRemoveFromFavorites = async () => {
//     try {
//       await recipeApi.removeFromFavorites(recipeId);
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
