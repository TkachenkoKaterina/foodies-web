import styles from './Back.module.scss';
import icons from '../../assets/icons/icons.svg';

const Back = ({ icon, onClick, disabled, type = 'button', fill, stroke }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <svg className={styles.icon}>
        <use href={`${icons}#${icon}`} fill={fill} stroke={stroke} />
      </svg>
    </button>
  );
};
export default Back;
