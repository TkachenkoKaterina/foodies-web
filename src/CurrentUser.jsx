import { useSelector } from 'react-redux';

import { useFetchSession } from './hooks/auth';
import { authSelectors } from './redux/auth';

const CurrentUser = ({ children }) => {
  useFetchSession();
  const isRefreshing = useSelector(authSelectors.getRefreshing);

  if (isRefreshing) return null;

  return children;
};

export default CurrentUser;
