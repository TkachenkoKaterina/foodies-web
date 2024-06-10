import styles from './User.module.scss';
import { Container, PathInfo, MainTitle, Subtitle, Button } from '../../ui-kit';
import UserInfo from '../UserInfo';
import TabsList from '../TabsList';

const User = ({ isOwner, user, onButtonClick, textButton }) => {
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
            <UserInfo isOwner={isOwner} user={user} />
            <Button onClick={onButtonClick}>{textButton}</Button>
          </div>
          <TabsList isOwner={isOwner} />
        </div>
      </Container>
    </section>
  );
};

export default User;
