import styles from './Loader.module.scss';

export const PageLoader = () => {
  return (
    <div className={styles.loader}>
      <Loader />
    </div>
  );
};

export const Loader = () => {
  return <div className={styles.loader__spinner}></div>;
};
