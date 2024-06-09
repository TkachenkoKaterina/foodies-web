import styles from './UploadButton.module.scss';
import icons from '../../images/icons.svg';

const UploadButton = ({ onChange }) => {
  return (
    <label className={styles.button}>
      <input type="file" accept="image/*" onChange={onChange} />
      <svg className={styles.icon}>
        <use href={`${icons}#icon-facebook`} />
      </svg>
    </label>
  );
};

export default UploadButton;
