import { useState } from 'react';
import styles from './Layout.module.scss';
import Header from '../Header';
import Footer from '../Footer';
// import { Sign } from 'crypto';
import SignUpModal from '../SignUpModal/SignUpModal';
import SignInModal from '../SignInModal/SignInModal';

const Layout = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignInClick = () => {
    // setIsAuthenticated(true);
    setIsSignedIn(() => true);
    setIsSignedUp(() => false);
  };

  const handleSignUpClick = () => {
    // setIsAuthenticated(true);
    setIsSignedUp(() => true);
    setIsSignedIn(() => false);
  };

  return (
    <div className={styles.wrapper}>
      <Header
        isAuthenticated={isAuthenticated}
        onSignInClick={handleSignInClick}
        onSignUpClick={handleSignUpClick}
      />
      <main className={styles.main}>{children}</main>
      <Footer />
      {isSignedUp ? (
        <SignUpModal isOpen={isSignedUp} onRequestClose={setIsSignedUp} />
      ) : null}
      ;
      {isSignedIn ? (
        <SignInModal isOpen={isSignedIn} onRequestClose={setIsSignedIn} />
      ) : null}
      ;
    </div>
  );
};

export default Layout;
