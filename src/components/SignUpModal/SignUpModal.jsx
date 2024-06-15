import Modal from '../Modal/Modal';
import SignUpForm from '../SignUpForm';
import styles from './SignUpModal.module.scss';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/modalSlice';
import { MODAL_TYPES } from '../../constants/common';

const SignUpModal = ({ isOpen }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModal({ modalType: MODAL_TYPES.LOGIN, modalProps: {} }));
  };

  return (
    <Modal isOpen={isOpen}>
      <div className={styles.signUpWrapper}>
        <h2 className={styles.title}>Sign Up</h2>
        <div className={styles.formWrapper}>
          <SignUpForm />
        </div>
        <div className={styles.textContainer}>
          <span className={styles.link}>
            I already have an account?
            <button className={styles.linkText} onClick={() => handleClick()}>
              &nbsp;Sign in
            </button>
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default SignUpModal;
