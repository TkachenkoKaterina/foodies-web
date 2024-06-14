import { useState } from 'react';
import styles from './Layout.module.scss';
import Header from '../Header';
import Footer from '../Footer';
// import { Sign } from 'crypto';
import FormSwitcher from '../FormSwitcher/FormSwitcher';
import LogOutModal from '../LogOutModal/LogOutModal';
import { getUser } from '../../redux/auth/authSelectors';
import { login, register } from '../../redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [logOutModal, setLogOutModal] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
 

  const handleSignInClick = () => {
    setIsSignedIn(true);
    setModal(true);
  };

  const handleSignUpClick = () => {
    setIsSignedIn(false);
    setModal(true);
  };

  const handleLogin = async (userData) => {
    await dispatch(login(userData));
    setModal(false);
  };

  const handleRegister = async (userData) => {
    await dispatch(register(userData));
    setModal(false);
  };

  return (
    <div className={styles.wrapper}>
      <Header
        user={user}
        onSignInClick={handleSignInClick}
        onSignUpClick={handleSignUpClick}
      />
      <main className={styles.main}>{children}</main>
      <Footer />
      {modal && (
        <FormSwitcher
          state={isSignedIn}
          togle={setIsSignedIn}
          onRequestClose={setModal}
          onAuthenticate={isSignedIn ? handleLogin : handleRegister}
        />
      )}
      {logOutModal && (
        <LogOutModal isOpen={logOutModal} onRequestClose={setLogOutModal} />
      )}
    </div>
  );
};

export default Layout;
