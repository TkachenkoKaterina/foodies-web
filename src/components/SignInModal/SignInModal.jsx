import Modal from '../Modal/Modal';
import SignInForm from '../SignInForm';
import styles from './SignInModal.module.scss';

const SignInModal = ({ isOpen, onRequestClose, togle }) => {
  const handleClick = () => {
    togle(() => false);
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className={styles.signUpWrapper}>
        <h2 className={styles.title}>Sign In</h2>
        <div className={styles.formWrapper}>
          <SignInForm onRequestClose={onRequestClose} />
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
