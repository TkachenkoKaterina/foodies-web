import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
import { routes } from '../../constants/routes';

const Nav = ({ isHomePage }) => {
    return (
<ul className={styles.list}>
        <li className={styles.item}>
            <NavLink 
            to={routes.main} 
            className={({ isActive }) =>
            isActive ? styles.activeLinkWhite : isHomePage ? styles.linkWhite : styles.link
          }
          >
            Home
            </NavLink>
        </li>
        <li className={styles.item}>
            <NavLink 
            to={routes.addRecipe} 
            className={({ isActive }) =>
            isActive ? styles.activeLink : isHomePage ? styles.linkWhite : styles.link
          }
          >
            Add recipe
            </NavLink>
          </li>
      </ul>
      );
    };
    
    export default Nav;