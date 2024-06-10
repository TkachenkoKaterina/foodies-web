import { useParams } from 'react-router-dom';

import User from '../../components/User';
import userImg from '../../assets/images/user.png';

const UserPage = () => {
  const { id } = useParams();
  const owner = {
    id: '10',
    followingList: ['2', '4'],
  };

  const user = {
    id,
    name: 'vICTORIA',
    email: 'victoria28682@gmai.com',
    recipes: 9,
    favorites: 9,
    followers: 5,
    following: 5,
    avatar: userImg,
  };

  const isOwner = owner?.id === user?.id;

  const textButton = isOwner
    ? 'log out'
    : owner?.followingList?.includes(user?.id)
    ? 'following'
    : 'follow';

  const onButtonClick = () => {
    if (isOwner) {
      console.log('log out');
    } else {
      console.log('follow');
    }
  };

  return (
    <User
      isOwner={isOwner}
      user={user}
      onButtonClick={onButtonClick}
      textButton={textButton}
    />
  );
};

export default UserPage;
