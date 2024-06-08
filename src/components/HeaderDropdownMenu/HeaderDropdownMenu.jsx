// DropdownMenu.js
import React, { useState } from 'react';
import styles from './HeaderDropdownMenu.module.css';
import { NavLink } from 'react-router-dom';

const HeaderDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleMenu} className={styles.iconButton}>
      <svg className={styles.icon}>
          <use xlinkHref="#icon-user" />
        </svg>
      </button>
      {isOpen && (
        <div className={styles.menu}>
          <NavLink to="/profile" className={styles.menuItem}>Profile</NavLink>
          <NavLink to="/logout" className={styles.menuItem}>Log out</NavLink>
        </div>
      )}
    </div>
  );
};

export default HeaderDropdownMenu;
