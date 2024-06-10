import styles from './IconButton.module.scss';
import icons from '../../images/icons.svg';

const IconButton = ({ icon, onClick, disabled, type = 'button' }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <svg className={styles.icon}>
        <use href={`${icons}#${icon}`} />
      </svg>
    </button>
  );
};
export default IconButton;
