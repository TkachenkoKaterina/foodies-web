import { useState } from 'react';
import styles from './Layout.module.scss';
import Header from '../Header';
import Footer from '../Footer';
// import { Sign } from 'crypto';
import FormSwitcher from '../FormSwitcher/FormSwitcher';

const Layout = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [modal, setModal] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  // setIsAuthenticated(true);

  const handleSignInClick = () => {
    setIsSignedIn(() => true);
    setModal(() => true);
  };

  const handleSignUpClick = () => {
    setIsSignedIn(() => false);
    setModal(() => true);
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

      {modal ? (
        <FormSwitcher
          state={isSignedIn}
          togle={setIsSignedIn}
          onRequestClose={setModal}
        />
      ) : null}
    </div>
  );
};

export default Layout;
