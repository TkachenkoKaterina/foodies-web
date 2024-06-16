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
  const modalIsOpen = useSelector(state => state.modal.isOpen);

  const handleSignInClick = () => {
    dispatch(openModal({ modalType: MODAL_TYPES.LOGIN, modalProps: {} }));
  };

  const handleSignUpClick = () => {
    dispatch(openModal({ modalType: MODAL_TYPES.REGISTER, modalProps: {} }));
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
      {modalIsOpen && <FormSwitcher type={modalType} />}
    </div>
  );
};

export default Layout;
