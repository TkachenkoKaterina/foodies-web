import Modal from 'react-modal';
import icons from '../../assets/icons/icons.svg';
import { useEffect } from 'react';
import styles from './CustomModal.module.scss';

const CustomModal = ({ isOpen, children, onRequestClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add('modal-open');

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  const onClose = () => {
    onRequestClose(() => false);
    document.body.classList.remove('modal-open');
  };

  Modal.setAppElement('#root');
  if (!isOpen) return null;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.content}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
      contentLabel="Modal"
    >
      {children}
      <button type="button" className={styles.close} onClick={() => onClose()}>
        <svg className={styles.close}>
          <use href={`${icons}#icon-cross`} />
        </svg>
      </button>
    </Modal>
  );
};

export default CustomModal;
