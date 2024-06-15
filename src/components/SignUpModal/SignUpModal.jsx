import Modal from '../Modal/Modal';
import SignUpForm from '../SignUpForm';
import styles from './SignUpModal.module.scss';

const SignUpModal = ({ isOpen, onRequestClose, togle }) => {
  const handleClick = () => {
    togle(() => true);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className={styles.signUpWrapper}>
        <h2 className={styles.title}>Sign Up</h2>
        <div className={styles.formWrapper}>
          <SignUpForm onRequestClose={onRequestClose} />
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
