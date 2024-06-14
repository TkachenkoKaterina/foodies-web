import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import icons from '../../assets/icons/icons.svg';
import { LogoWhite } from '../../ui-kit';
import styles from './BurgerMenu.module.scss';
import images from '../../assets/images/hero'


const BurgerMenu = ({isHomePage}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsDrawerOpen(false);
    }
  };

  useEffect(() => {
    if (isDrawerOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDrawerOpen]);

  const iconColor = isHomePage ? styles.iconWhite : styles.iconBlack;

  return (
    <div>
      <button onClick={toggleDrawer} className={styles.menuButton}>
      <svg className={`${styles.icon} ${iconColor}`}>
          <use href={`${icons}#icon-burger`} />
        </svg>
      </button>
      {isDrawerOpen && (
        <div className={styles.drawer}>
          <div className={styles.drawerHeader}>
            <LogoWhite />
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
            <NavLink  to="/recipe/add" className={styles.menuItem} onClick={toggleDrawer}>
              Add Recipe
            </NavLink>
          </nav>
          <div className={styles.heroWrapperImg}>
                        <div className={styles.heroImgSmall}>
                            <img
                                width='128'
                                src={ images.imageSmall1x }
                                srcSet={`${images.imageSmall1x} 1x,
                                    ${images.imageSmall2x} 2x,
                                    ${images.imageSmall2x} 3x`}
                                alt="food"
                            />
                        </div>
                        <div className={styles.heroImgBig}>
                            <img
                                width='302'
                                src={ images.imageBig1x }
                                srcSet={`${images.imageBig1x} 1x,
                                    ${images.imageBig2x} 2x,
                                    ${images.imageBig2x} 3x`}
                                alt="food"
                            />
                        </div>
                    </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
