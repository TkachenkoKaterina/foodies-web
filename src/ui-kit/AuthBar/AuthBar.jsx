import styles from './AuthBar.module.scss';

const AuthBar = ({ onSignInClick, onSignUpClick, isSignUp }) => {
  return (
<div className={styles.authSlider}>
<button type="button" onClick={onSignInClick} className={`${styles.authButton} ${isSignUp && styles.active}`}>Sign In</button>
<button type="button" onClick={onSignUpClick} className={`${styles.authButton} ${!isSignUp && styles.active}`}>Sign Up</button>
</div>
  );
};

export default AuthBar;