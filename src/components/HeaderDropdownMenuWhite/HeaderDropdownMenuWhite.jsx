import styles from './HeaderDropdownMenuWhite.module.scss';
import { NavLink } from 'react-router-dom';
import icons from '../../assets/icons/icons.svg';
import { routes } from '../../constants/routes';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/auth/authSelectors';

const HeaderDropdownMenuWhite = ({isOpen}) => {
  const user = useSelector(getUser); 
  const userId = user?.id; 

  return (
    <div className={styles.dropdown}>
        <svg className={styles.icon}>
          <use href={`${icons}#${isOpen ? 'icon-chevron-up' : 'icon-chevron-down'}`} />
        </svg>
      {isOpen && (
        <div className={styles.menu}>
          <NavLink to={`${routes.user}/${userId}`} className={styles.menuItem}>Profile</NavLink>
          <button type="button"  className={styles.menuItem}>
            Log out
            <svg className={styles.icon}>
              <use href={`${icons}#icon-arrow-up-right`} />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default HeaderDropdownMenuWhite;
