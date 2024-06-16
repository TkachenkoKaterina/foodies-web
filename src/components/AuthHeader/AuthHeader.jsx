import styles from './AuthHeader.module.scss';
import { Container, Logo, UserBar } from '../../ui-kit';
import Nav from '../Nav';
import BurgerMenu from '../BurgerMenu';

const AuthHeader = ({isHomePage}) => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.navbar}>
        <Logo isHomePage={isHomePage} />
        <div className={styles.wrapper}>
        <Nav isHomePage={isHomePage} />
          <div className={styles.mobileWrapper}>
            <UserBar isHomePage={isHomePage} />
            <BurgerMenu  isHomePage={isHomePage} />
          </div>
          </div>
        </nav>
    </Container>
    </header>
  );
};

export default AuthHeader;


