import React, { useState } from 'react';
import styles from './AuthBar.module.scss';

const AuthBar = ({ onSignInClick, onSignUpClick, isSignUp }) => {
  const [isSignUpActive, setIsSignUpActive] = useState(isSignUp);

  const handleSignInClick = () => {
    setIsSignUpActive(false);
    onSignInClick();
  };

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
    onSignUpClick(); 
  };

  return (
    <div className={styles.authContainer}>
      <button
        type="button"
        onClick={handleSignInClick}
        className={`${styles.authButton} ${!isSignUpActive && styles.active}`} 
      >
        Sign In
      </button>
      <button
        type="button"
        onClick={handleSignUpClick}
        className={`${styles.authButton} ${isSignUpActive && styles.active}`}
      >
        Sign Up
      </button>
    </div>
  );
};

export default AuthBar;
