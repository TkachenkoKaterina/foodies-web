import CustomModal from '../CustomModal/CustomModal';
import SignInForm from '../SignInForm';
import styles from './SignInModal.module.scss';

const SignInModal = ({ isOpen, onRequestClose }) => {
  return (
    <CustomModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className={styles.signUpWrapper}>
        <h2 className={styles.title}>Sign In</h2>
        <div className={styles.formWrapper}>
          <SignInForm onRequestClose={onRequestClose} />
        </div>
        <div className={styles.textContainer}>
          <a className={styles.link} onClick={() => alert('Sign in')}>
            Don&apos;t have an account?
            <span className={styles.linkText}> Create an account</span>
          </a>
        </div>
      </div>
    </CustomModal>
  );
};

export default SignInModal;
