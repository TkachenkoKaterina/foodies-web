import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { Container } from '../../ui-kit';
import HeaderDropdownMenu from '../HeaderDropdownMenu';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
    <nav className={styles.navbar}>
      <NavLink to="/" >
      <span className={styles.logoText}>foodies</span>
      </NavLink>
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
      <div className={styles.profileSection}>
            <img src="path/to/avatar.jpg" alt="Avatar" className={styles.avatar} />
            <div className={styles.wrapper}>
              <span className={styles.name}>Username</span>
              <HeaderDropdownMenu />
            </div>
      </div>
    </nav>
    </Container>
    </header>
  );
};

export default Header;


