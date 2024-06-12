import { NavLink } from 'react-router-dom';
import styles from './NavWhite.module.scss';

const NavWhite = () => {
    return (
<ul className={styles.list}>
        <li className={styles.item}>
            <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? styles.activeLink : styles.link}
          >
            Home
            </NavLink>
        </li>
        <li className={styles.item}>
            <NavLink 
            to="/recipe/add" 
            className={({ isActive }) => isActive ? styles.activeLink : styles.link}
          >
            Add recipe
            </NavLink>
          </li>
      </ul>
      );
    };
    
    export default NavWhite;