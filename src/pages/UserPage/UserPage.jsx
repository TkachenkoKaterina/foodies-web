import User from '../../components/User';
import userImg from '../../assets/images/user.png';

const user = {
  name: 'vICTORIA',
  email: 'victoria28682@gmai.com',
  recipes: 9,
  favorites: 9,
  followers: 5,
  following: 5,
  avatar: userImg,
};

const UserPage = () => {
  const isOwner = true;

  return <User isOwner={isOwner} user={user} />;
};

export default UserPage;
