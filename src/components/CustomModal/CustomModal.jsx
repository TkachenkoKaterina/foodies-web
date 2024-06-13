import Modal from 'react-modal';
import icons from '../../assets/icons/icons.svg';
import { useEffect, useState } from 'react';
import styles from './CustomModal.module.scss';

const CustomModal = ({ isOpen, children }) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  useEffect(() => {
    document.body.classList.add('modal-open');
  }, []);

  const onClose = () => {
    setModalOpen(false);
    document.body.classList.remove('modal-open');
  };

  Modal.setAppElement('#root');
  if (!isOpen) return null;
  return (
    <Modal
      isOpen={modalOpen}
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
