import styles from './Header.module.scss';
import { Container } from '../../ui-kit';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <h2>Header</h2>
      </Container>
    </header>
  );
};

export default Header;
