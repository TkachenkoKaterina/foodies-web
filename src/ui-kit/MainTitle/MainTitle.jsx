import styles from './MainTitle.module.scss';

const MainTitle = ({ text }) => {
  return <h2 className={styles.text}>{text}</h2>;
};

export default MainTitle;
