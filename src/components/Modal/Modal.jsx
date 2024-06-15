import RModal from 'react-modal';
import icons from '../../assets/icons/icons.svg';
import { useEffect } from 'react';
import styles from './Modal.module.scss';

const Modal = ({ isOpen, children, onRequestClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.classList.add('modal-open');
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  const onClose = () => {
    onRequestClose(false);
    document.body.classList.remove('modal-open');
    document.body.style.paddingRight = '';
  };

  if (!isOpen) return null;
  return (
    <RModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.content}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
      contentLabel="Modal"
    >
      {children}
      <button type="button" className={styles.close} onClick={onClose}>
        <svg className={styles.close}>
          <use href={`${icons}#icon-cross`} />
        </svg>
      </button>
    </RModal>
  );
};

export default Modal;
