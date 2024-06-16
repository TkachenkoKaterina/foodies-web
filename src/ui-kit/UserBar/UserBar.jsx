import React, { useState } from 'react';
import HeaderDropdownMenu from '../../components/HeaderDropdownMenu';
import HeaderDropdownMenuWhite from '../../components/HeaderDropdownMenuWhite';
import styles from './UserBar.module.scss';
import defaultAvatar from '../../assets/images/user.png';
import { useOwner} from '../../hooks/user';

const UserBar = ({isHomePage}) => {
  const owner = useOwner();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
<div className={styles.profileSection} onClick={toggleMenu}>
<img src={owner?.avatar || defaultAvatar} alt="Avatar" className={styles.avatar} />
<div className={styles.wrapper}>
<span className={styles.name}>{owner?.name || 'Username'}</span>
  {isHomePage ? <HeaderDropdownMenuWhite isOpen={isOpen} /> : <HeaderDropdownMenu isOpen={isOpen} />}
</div>
</div>
  );
};

export default UserBar;