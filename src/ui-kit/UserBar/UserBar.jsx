import HeaderDropdownMenu from '../../components/HeaderDropdownMenu';
import styles from './UserBar.module.scss';
import defaultAvatar from '../../assets/images/user.png';

const UserBar = () => {
  return (
<div className={styles.profileSection}>
<img src={defaultAvatar} alt="Avatar" className={styles.avatar} />
<div className={styles.wrapper}>
  <span className={styles.name}>Username</span>
  <HeaderDropdownMenu />
</div>
</div>
  );
};

export default UserBar;