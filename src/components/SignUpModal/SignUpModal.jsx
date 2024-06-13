import CustomModal from '../CustomModal/CustomModal';
import SignUpForm from '../SignUpForm';
import styles from './SignUpModal.module.scss';

const SignUpModal = () => {
  return (
    <CustomModal isOpen={true}>
      <div className={styles.signUpWrapper}>
        <h2 className={styles.title}>Sign Up</h2>
        <SignUpForm />
        <div className={styles.textContainer}>
          <a className={styles.link} onClick={() => alert('Sign in')}>
            I already have an account? Sign in
          </a>
        </div>
      </div>
    </CustomModal>
  );
};

export default SignUpModal;
