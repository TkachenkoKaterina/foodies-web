import styles from './HeaderDropdownMenuWhite.module.scss';
import { NavLink } from 'react-router-dom';
import icons from '../../assets/icons/icons.svg';
import { routes } from '../../constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/auth/authSelectors';
import { useState } from 'react';
import LogOutModal from '../LogOutModal/LogOutModal';
import { logout } from '../../redux/auth/authOperations';

const HeaderDropdownMenuWhite = ({isOpen}) => {
  const user = useSelector(getUser); 
  const userId = user?._id; 
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpenLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const handleCloseLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  const handleLogoutSuccess = async () => {
    try {
      await dispatch(logout()).unwrap(); 
      handleCloseLogoutModal(); 
    } catch (error) {
      console.error('Logout failed', error); 
    }
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
          <button type="button"  onClick={handleOpenLogoutModal}  className={styles.menuItem}>
            Log out
            <svg className={styles.icon}>
              <use href={`${icons}#icon-arrow-up-right`} />
            </svg>
          </button>
        </div>
      )}
    </div>
     <LogOutModal isOpen={isLogoutModalOpen} 
        onCancel={handleCloseLogoutModal} 
        onSuccess={handleLogoutSuccess} />
     </>
  );
};

export default HeaderDropdownMenuWhite;
