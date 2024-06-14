import { useState } from 'react';
import styles from './Layout.module.scss';
import Header from '../Header';
import Footer from '../Footer';
// import { Sign } from 'crypto';
import FormSwitcher from '../FormSwitcher/FormSwitcher';
import LogOutModal from '../LogOutModal/LogOutModal';

const Layout = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [modal, setModal] = useState(false);
  const [logOutModlal, setLogOutModal] = useState(false);

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
      ;
      {logOutModlal ? (
        <LogOutModal isOpen={logOutModlal} onRequestClose={setLogOutModal} />
      ) : null}
    </div>
  );
};

export default Layout;
