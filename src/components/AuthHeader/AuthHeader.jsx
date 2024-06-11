import styles from './AuthHeader.module.scss';
import { Container, LogoWhite, UserBar } from '../../ui-kit';
import Nav from '../Nav';

const AuthHeader = () => {
  return (
    <header className={styles.header}>
      <Container>
    <nav className={styles.navbar}>
      <LogoWhite />
      <Nav />
      <UserBar/>
    </nav>
    </Container>
    </header>
  );
};

export default AuthHeader;


