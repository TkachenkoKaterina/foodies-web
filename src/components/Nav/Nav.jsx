import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

const Nav = () => {
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
            to="/addrecipe" 
            className={({ isActive }) => isActive ? styles.activeLink : styles.link}
          >
            Add recipe
            </NavLink>
          </li>
      </ul>
      );
    };
    
    export default Nav;