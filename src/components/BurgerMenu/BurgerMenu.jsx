import React, { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { NavLink } from 'react-router-dom';
import icons from '../../assets/icons/icons.svg';
import styles from './BurgerMenu.module.scss';

const BurgerMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={toggleDrawer} className={styles.menuButton}>
        <svg className={styles.icon}>
          <use href={`${icons}#icon-burger`} />
        </svg>
      </button>
      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer}
        direction='left'
        className={styles.drawer}
      >
        <div className={styles.drawerHeader}>
          <button onClick={toggleDrawer} className={styles.closeButton}>
            <svg className={styles.icon}>
              <use href={`${icons}#icon-cross`} />
            </svg>
          </button>
        </div>
        <nav className={styles.nav}>
          <NavLink to="/" className={styles.menuItem} onClick={toggleDrawer}>
            Home
          </NavLink>
          <NavLink to="/addRecipe" className={styles.menuItem} onClick={toggleDrawer}>
            Add Recipe
          </NavLink>
        </nav>
      </Drawer>
    </div>
  );
};

export default BurgerMenu;
