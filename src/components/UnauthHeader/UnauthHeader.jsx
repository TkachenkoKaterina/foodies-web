import React from 'react';
import styles from './UnauthHeader.module.scss';
import { Container, Logo, AuthBar } from '../../ui-kit';

const UnauthHeader = ({ isHomePage, onSignInClick, onSignUpClick }) => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.navbar}>
        <Logo isHomePage={isHomePage} />
          <AuthBar
            onSignInClick={onSignInClick}
            onSignUpClick={onSignUpClick}
          />
        </nav>
      </Container>
    </header>
  );
};

export default UnauthHeader;
