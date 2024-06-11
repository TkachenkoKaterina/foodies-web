import { NavLink } from 'react-router-dom';

import { routes } from '../../constants/routes';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <NavLink to={routes.main} className={styles.logo}>
     foodies
    </NavLink>
  );
};

export default Logo;
