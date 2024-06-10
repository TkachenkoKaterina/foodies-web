import { Outlet, Link, useLocation } from 'react-router-dom';

import styles from './TabsList.module.scss';
import { routes } from '../../constants/routes';

const tabs = {
  owner: [
    { title: 'my recipes', path: routes.recipes },
    { title: 'my favorites', path: routes.favorites },
    { title: 'Followers', path: routes.followers },
    { title: 'Following', path: routes.following },
  ],
  user: [
    { title: 'recipes', path: routes.recipes },
    { title: 'followers', path: routes.followers },
  ],
};

const TabsList = ({ isOwner }) => {
  const { pathname } = useLocation();

  const getPath = path => {
    const currentPath = pathname.split('/')[3] || '';
    return currentPath === path;
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.tabs}>
        {isOwner
          ? tabs.owner.map(tab => (
              <Tab
                key={tab.title}
                title={tab.title}
                path={tab.path}
                active={getPath(tab.path)}
              />
            ))
          : tabs.user.map(tab => (
              <Tab
                key={tab.title}
                title={tab.title}
                path={tab.path}
                active={getPath(tab.path)}
              />
            ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default TabsList;

const Tab = ({ title, path, active }) => {
  return (
    <li className={`${styles.tab} ${active ? styles.active : ''}`}>
      <Link to={path} className={styles.link}>
        {title}
      </Link>
    </li>
  );
};
