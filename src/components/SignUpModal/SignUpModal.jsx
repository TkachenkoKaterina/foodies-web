import CustomModal from '../CustomModal/CustomModal';
import SignUpForm from '../SignUpForm';
import styles from './SignUpModal.module.scss';

const SignUpModal = ({ isOpen, onRequestClose, togle }) => {
  const handleClick = () => {
    togle(() => true);
  };

  return (
    <CustomModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className={styles.signUpWrapper}>
        <h2 className={styles.title}>Sign Up</h2>
        <div className={styles.formWrapper}>
          <SignUpForm onRequestClose={onRequestClose} />
        </div>
        <div className={styles.textContainer}>
          <a className={styles.link} onClick={() => handleClick()}>
            I already have an account?
            <span className={styles.linkText}> Sign in</span>
          </a>
        </div>
      </div>
    </CustomModal>
  );
};

export default SignUpModal;
