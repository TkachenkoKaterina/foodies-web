import styles from './User.module.scss';
import { Container, PathInfo, MainTitle, Subtitle } from '../../ui-kit';
import UserInfo from '../UserInfo';

const User = ({ isOwner, user }) => {
  return (
    <section className={styles.page}>
      <Container>
        <PathInfo path="profile" />
        <div className={styles.texts}>
          <MainTitle text="Profile" />
          <Subtitle text="Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us." />
        </div>
        <div className={styles.content}>
          <UserInfo isOwner={isOwner} user={user} />
        </div>
      </Container>
    </section>
  );
};

export default User;
