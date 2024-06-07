import styles from './Footer.module.scss';
import { Container } from '../../ui-kit';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <h2>Footer</h2>
      </Container>
    </footer>
  );
};

export default Footer;
