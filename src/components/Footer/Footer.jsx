import styles from './Footer.module.scss';
import { Container, Logo } from '../../ui-kit';
import NetworkLinks from '../NetworkLinks';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <Logo />
          <NetworkLinks />
        </div>
      </Container>
      <div className={styles.bottom}>
        <Container>
          <p
            className={styles.copy_text}
          >{`@${year}, Foodies. All rights reserved`}</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
