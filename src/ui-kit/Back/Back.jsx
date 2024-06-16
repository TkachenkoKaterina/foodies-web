import styles from './Back.module.scss';
import icons from '../../assets/icons/icons.svg';

const Back = ({ icon, onClick, disabled, type = 'button', fill }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <svg className={styles.icon}>
        <use href={`${icons}#${icon}`} fill={fill} />
      </svg>
    </button>
  );
};
export default Back;
