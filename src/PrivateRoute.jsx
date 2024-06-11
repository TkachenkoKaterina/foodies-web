import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { routes } from './constants/routes';
import { authSelectors } from './redux/auth';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(authSelectors.getIsLoggedIn);

  if (!isAuth) return <Navigate to={routes.main} replace />;
  return <>{children}</>;
};

export default PrivateRoute;
