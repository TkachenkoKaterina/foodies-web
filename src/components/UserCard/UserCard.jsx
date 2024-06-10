import { useNavigate } from 'react-router-dom';

import styles from './UserCard.module.scss';
import { Button, IconButton } from '../../ui-kit';
import { routes } from '../../constants/routes';

const UserCard = ({ user }) => {
  const navigate = useNavigate();
  const followingList = ['2', '4'];

  const isFollowing = followingList.includes(user?.id);

  const goToProfile = () => {
    navigate(`${routes.user}/${user?.id}`);
  };

  const onFollow = id => {
    console.log('follow', id);
  };

  const onUnfollow = id => {
    console.log('unfollow', id);
  };

  const buttonText = isFollowing ? 'following' : 'follow';
  const onButtonClick = isFollowing
    ? () => onUnfollow(user?.id)
    : () => onFollow(user?.id);

  return (
    <li className={styles.item}>
      <div className={styles.left}>
        <div className={styles.img}>
          <img src={user?.img} alt="user" />
        </div>
        <div className={styles.info}>
          <p className={styles.name}>{user?.name}</p>
          <div
            className={styles.count}
          >{`Own recipes: ${user?.ownRecipes}`}</div>
          <Button onClick={onButtonClick} variant="outline_secondary">
            {buttonText}
          </Button>
        </div>
      </div>
      <ul className={styles.center}>
        {user?.recipes.slice(0, 4).map(recipe => (
          <li key={recipe.id} className={styles.recipe}>
            <img src={recipe.img} alt="recipe" />
          </li>
        ))}
      </ul>
      <IconButton icon="icon-arrow-up-right" onClick={goToProfile} />
    </li>
  );
};

export default UserCard;
