import React from 'react';
import styles from './UnauthHeader.module.scss';
import { Container, LogoWhite, Logo, AuthBar } from '../../ui-kit';

const UnauthHeader = ({isHomePage}) => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.navbar}>
        {isHomePage ? <LogoWhite /> : <Logo />}
          <AuthBar />
        </nav>
      </Container>
    </header>
  );
};

export default UnauthHeader;
