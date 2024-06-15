import { useNavigate } from 'react-router-dom';

import styles from './UserCard.module.scss';
import { Button, Back } from '../../ui-kit';
import { routes } from '../../constants/routes';
import { getPathWithId } from '../../helpers/getPathWithId';
import { getImagePath, TYPE_IMG } from '../../helpers/getImagePath';

const UserCard = ({ user, onFollow, onUnfollow, owner }) => {
  const navigate = useNavigate();

  const isFollowing = owner?.following?.includes(user?._id);

  const isOwner = owner?._id === user?._id;

  const buttonText = isOwner ? 'me' : isFollowing ? 'following' : 'follow';
  const onButtonClick = () =>
    isOwner
      ? () => {}
      : isFollowing
      ? onUnfollow(user?._id)
      : onFollow(user?._id);

  const goToProfile = () => {
    navigate(getPathWithId(routes.user, user?._id));
  };

  const goToRecipe = id => {
    navigate(getPathWithId(routes.recipe, id));
  };

  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <div className={styles.img}>
          <img
            src={getImagePath(user?.avatar, TYPE_IMG.AVATAR)}
            alt={user?.name}
          />
        </div>
        <div className={styles.info}>
          <p className={styles.name}>{user?.name}</p>
          <div
            className={styles.count}
          >{`Own recipes: ${user?.recipes?.length}`}</div>
          <Button onClick={onButtonClick} variant="outline_secondary">
            {buttonText}
          </Button>
        </div>
      </div>
      <ul className={styles.center}>
        {user?.recipes.map(recipe => (
          <li
            key={recipe._id}
            className={styles.recipe}
            onClick={() => goToRecipe(recipe._id)}
          >
            <img
              src={getImagePath(recipe?.thumb, TYPE_IMG.RECIPE)}
              alt={recipe?.title}
            />
          </li>
        ))}
      </ul>
      <Back icon="icon-arrow-up-right" onClick={goToProfile} />
    </div>
  );
};

export default UserCard;
