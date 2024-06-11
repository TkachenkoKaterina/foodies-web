import styles from './HeaderDropdownMenu.module.scss';
import { NavLink } from 'react-router-dom';
import icons from '../../assets/icons/icons.svg';

const HeaderDropdownMenu = ({isOpen}) => {

  return (
    <div className={styles.dropdown}>
        <svg className={styles.icon}>
          <use href={`${icons}#${isOpen ? 'icon-chevron-up' : 'icon-chevron-down'}`} />
        </svg>
      {isOpen && (
        <div className={styles.menu}>
          <NavLink to="/profile" className={styles.menuItem}>Profile</NavLink>
          <NavLink to="/logout" className={styles.menuItem}>
            Log out
            <svg className={styles.icon}>
              <use href={`${icons}#icon-arrow-up-right`} />
            </svg>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default HeaderDropdownMenu;
