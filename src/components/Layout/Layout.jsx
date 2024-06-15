import styles from './Layout.module.scss';
import Header from '../Header';
import Footer from '../Footer';
import FormSwitcher from '../FormSwitcher/FormSwitcher';
import { getUser } from '../../redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/modal/modalSlice';
import { MODAL_TYPES } from '../../constants/common';

const Layout = ({ children }) => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const modalType = useSelector(state => state.modal.modalType);
  // const modalProps = useSelector(state => state.modal.modalProps);
  const modalIsOpen = useSelector(state => state.modal.isOpen);

  // const [modal, setModal] = useState(false);
  // const [logOutModal, setLogOutModal] = useState(false);
  // const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignInClick = () => {
    dispatch(openModal({ modalType: MODAL_TYPES.LOGIN, modalProps: {} }));
    // console.log('handleSignInClick');
    // setIsSignedIn(true);
    // setModal(true);
  };

  const handleSignUpClick = () => {
    dispatch(openModal({ modalType: MODAL_TYPES.REGISTER, modalProps: {} }));
    // setIsSignedIn(false);
    // setModal(true);
  };

  // const handleLogin = async userData => {
  //   await dispatch(login(userData));
  //   setModal(false);
  // };

  // const handleRegister = async userData => {
  //   await dispatch(register(userData));
  //   setModal(false);
  // };

  return (
    <div className={styles.wrapper}>
      <Header
        user={user}
        onSignInClick={handleSignInClick}
        onSignUpClick={handleSignUpClick}
      />
      <main className={styles.main}>{children}</main>
      <Footer />

      {modalIsOpen && <FormSwitcher type={modalType} />}

      {/* {modal && (
        <FormSwitcher
          state={isSignedIn}
          togle={setIsSignedIn}
          onRequestClose={setModal}
          onAuthenticate={isSignedIn ? handleLogin : handleRegister}
        />
      )}
      {logOutModal && (
        <LogOutModal isOpen={logOutModal} onRequestClose={setLogOutModal} />
      )} */}
    </div>
  );
};

export default Layout;
