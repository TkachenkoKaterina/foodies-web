import styles from './User.module.scss';
import {
  Container,
  PathInfo,
  MainTitle,
  Subtitle,
  Button,
  PageLoader,
} from '../../ui-kit';
import UserInfo from '../UserInfo';
import TabsList from '../TabsList';

const User = ({
  isOwner,
  user,
  userImg,
  isFollow,
  isLoading,
  onFollowClick,
  onLogout,
  onUpdateAvatar,
}) => {
  const textButton = isOwner ? 'log out' : isFollow ? 'following' : 'follow';

  const onButtonClick = () => {
    if (isOwner) {
      onLogout();
    } else {
      onFollowClick(user?._id);
    }
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <section className={styles.page}>
      <Container>
        <PathInfo path="profile" />
        <div className={styles.texts}>
          <MainTitle text="Profile" />
          <Subtitle text="Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us." />
        </div>
        <div className={styles.content}>
          <div className={styles.info_wrapper}>
            <UserInfo
              isOwner={isOwner}
              user={user}
              userImg={userImg}
              onUpdateAvatar={onUpdateAvatar}
            />
            <Button onClick={onButtonClick}>{textButton}</Button>
          </div>
          <TabsList isOwner={isOwner} />
        </div>
      </Container>
    </section>
  );
};

export default User;
