import styles from './AuthHeader.module.scss';
import { Container, LogoWhite, Logo, UserBar } from '../../ui-kit';
import Nav from '../Nav';
import NavWhite from '../NavWhite';
import BurgerMenu from '../BurgerMenu';

const AuthHeader = ({isHomePage}) => {
  return (
    <header className={styles.header}>
      <Container>
    <nav className={styles.navbar}>
          {isHomePage ? <LogoWhite /> : <Logo />}
          {isHomePage ? <NavWhite /> : <Nav />}
      <UserBar isHomePage={isHomePage} />
      <BurgerMenu />
    </nav>
    </Container>
    
    </header>
  );
};

export default AuthHeader;


