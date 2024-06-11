import React from 'react';
import styles from './UnauthHeader.module.scss';
import { Container, LogoWhite, AuthBar } from '../../ui-kit';

const UnauthHeader = () => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.navbar}>
          <LogoWhite />
         <AuthBar />
        </nav>
      </Container>
    </header>
  );
};

export default UnauthHeader;
