import styles from './HeaderDropdownMenuWhite.module.scss';
import { NavLink } from 'react-router-dom';
import icons from '../../assets/icons/icons.svg';
import { routes } from '../../constants/routes';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/auth/authSelectors';
import { useState } from 'react';
import LogOutModal from '../LogOutModal/LogOutModal';

const HeaderDropdownMenuWhite = ({isOpen}) => {
  const user = useSelector(getUser); 
  const userId = user?._id; 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div className={styles.dropdown}>
        <svg className={styles.icon}>
          <use href={`${icons}#${isOpen ? 'icon-chevron-up' : 'icon-chevron-down'}`} />
        </svg>
      {isOpen && (
        <div className={styles.menu}>
          <NavLink to={`${routes.user}/${userId}`} className={styles.menuItem}>Profile</NavLink>
          <button type="button"  onClick={handleLogoutClick}  className={styles.menuItem}>
            Log out
            <svg className={styles.icon}>
              <use href={`${icons}#icon-arrow-up-right`} />
            </svg>
          </button>
        </div>
      )}
    </div>
     <LogOutModal isOpen={isModalOpen} onRequestClose={handleModalClose} />
     </>
  );
};

export default HeaderDropdownMenuWhite;
