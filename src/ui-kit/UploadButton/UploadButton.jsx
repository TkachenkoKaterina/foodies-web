import styles from './UploadButton.module.scss';
import icons from '../../assets/icons/icons.svg';

const UploadButton = ({ onChange }) => {
  return (
    <label className={styles.button}>
      <input type="file" accept="image/*" onChange={onChange} />
      <svg className={styles.icon}>
        <use href={`${icons}#icon-plus`} />
      </svg>
    </label>
  );
};

export default UploadButton;
