import { Route, Routes } from 'react-router-dom';

import { routes } from './constants/routes';
import HomePage from './pages/HomePage';

const PublicRoutes = [
  <Route key={routes.main} path={routes.main} element={<HomePage />} />,
];

const PrivateRoutes = [];

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
