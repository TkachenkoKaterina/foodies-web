import styles from './Subtitle.module.scss';

const Subtitle = ({ text }) => {
  return <p className={styles.text}>{text}</p>;
};

export default Subtitle;
