import { Route, Routes } from 'react-router-dom';

import { routes } from './constants/routes';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

const PublicRoutes = [
  <Route key={routes.main} path={routes.main} element={<HomePage />} />,
];

const PrivateRoutes = [
  <Route
    key={routes.user}
    path={`${routes.user}/:id`}
    element={<UserPage />}
  />,
];

const RoutesSwitch = () => {
  return (
    <Routes>
      {PublicRoutes}
      {PrivateRoutes}
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default RoutesSwitch;
