import { Route, Routes } from 'react-router-dom';

import { routes } from './constants/routes';
import Main from './pages/Main';

const PublicRoutes = [
  <Route key={routes.main} path={routes.main} element={<Main />} />,
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
