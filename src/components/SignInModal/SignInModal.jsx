import Modal from '../Modal/Modal';
import SignInForm from '../SignInForm';
import styles from './SignInModal.module.scss';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/modalSlice';
import { MODAL_TYPES } from '../../constants/common';

const SignInModal = ({ isOpen }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModal({ modalType: MODAL_TYPES.REGISTER, modalProps: {} }));
  };

  return (
    <Modal isOpen={isOpen}>
      <div className={styles.signUpWrapper}>
        <h2 className={styles.title}>Sign In</h2>
        <div className={styles.formWrapper}>
          <SignInForm />
        </div>
        <div className={styles.textContainer}>
          <span className={styles.link}>
            Don&apos;t have an account?
            <button className={styles.linkText} onClick={() => handleClick()}>
              &nbsp;Create an account
            </button>
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default SignInModal;
