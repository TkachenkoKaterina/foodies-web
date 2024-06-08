import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './UnauthHeader.module.scss';
import { Container } from '../../ui-kit';

const UnauthHeader = ({ onSignInClick, onSignUpClick, isSignUp }) => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.navbar}>
          <NavLink to="/" >
            <span className={styles.logoText}>foodies</span>
          </NavLink>
          <div className={styles.authSlider}>
            <button onClick={onSignInClick} className={`${styles.authButton} ${!isSignUp && styles.active}`}>Sign In</button>
            <button onClick={onSignUpClick} className={`${styles.authButton} ${isSignUp && styles.active}`}>Sign Up</button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default UnauthHeader;
