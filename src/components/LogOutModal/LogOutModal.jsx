import { Button } from '../../ui-kit';
import Modal from '../Modal/Modal';
import styles from './LogOutModal.module.scss';

const LogOutModal = ({ isOpen, onCancel, onSuccess }) => {
  // const LogOutModal = ({ isOpen, onRequestClose }) => {
  //   const handleClick = () => {
  //     onRequestClose();
  //   };

  return (
    <Modal isOpen={isOpen} onRequestClose={onCancel}>
      <div className={styles.signUpWrapper}>
        <h2 className={styles.title}>Are you logging out?</h2>
        <h2 className={styles.titleSmall}>Log out</h2>
        <h2 className={styles.textContainer}>
          You can always log back in at any time.
        </h2>
        <div className={styles.btnWraper}>
          <Button className={styles.button} onClick={onSuccess}>
            log out
          </Button>
          <Button
            className={styles.button}
            onClick={onCancel}
            variant={'outline'}
          >
            cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default LogOutModal;
