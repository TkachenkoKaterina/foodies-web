import React, { useState } from 'react';
import HeaderDropdownMenu from '../../components/HeaderDropdownMenu';
import HeaderDropdownMenuWhite from '../../components/HeaderDropdownMenuWhite';
import styles from './UserBar.module.scss';
import defaultAvatar from '../../assets/images/user.png';
// import { getUserAvatar, getUsername } from '../../redux/auth/authSelectors';
// import { getMe} from '../../redux/auth/authOperations';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';

const UserBar = ({isHomePage}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getMe());
  // }, [dispatch]);

  // const avatarUrl = useSelector(getUserAvatar);
  // const username = useSelector(getUsername);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
<div className={styles.profileSection} onClick={toggleMenu}>
<img src={defaultAvatar} alt="Avatar" className={styles.avatar} />
{/* <img src={avatarUrl || defaultAvatar} alt="Avatar" className={styles.avatar} /> */}
<div className={styles.wrapper}>
  <span className={styles.name}>Username</span>
  {/* <span className={styles.name}>{username || 'Username'}</span> */}
  {isHomePage ? <HeaderDropdownMenuWhite isOpen={isOpen} /> : <HeaderDropdownMenu isOpen={isOpen} />}
</div>
</div>
  );
};

export default UserBar;