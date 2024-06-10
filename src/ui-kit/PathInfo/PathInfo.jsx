import { Link } from 'react-router-dom';

import styles from './PathInfo.module.scss';
import { routes } from '../../constants/routes';

const PathInfo = ({ path }) => {
  return (
    <div className={styles.wrapper}>
      <Link to={routes.main} className={`${styles.text} ${styles.link}`}>
        home
      </Link>
      <span className={styles.text}>/</span>
      <p className={`${styles.text} ${styles.black}`}>{path}</p>
    </div>
  );
};

export default PathInfo;
