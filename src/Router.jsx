import { Route, Routes } from 'react-router-dom';

import { routes } from './constants/routes';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import Recipes from './pages/UserPage/Recipes';
import Followers from './pages/UserPage/Followers';
import Favorites from './pages/UserPage/Favorites';
import Following from './pages/UserPage/Following';
import AddRecipePage from './pages/AddRecipePage/AddRecipePage';

const PublicRoutes = [
  <Route key={routes.main} path={routes.main} element={<HomePage />} />,
];

const PrivateRoutes = [
  <Route key={routes.user} path={`${routes.user}/:id`} element={<UserPage />}>
    <Route key={routes.recipes} path={routes.recipes} element={<Recipes />} />
    <Route
      key={routes.followers}
      path={routes.followers}
      element={<Followers />}
    />
    <Route
      key={routes.favorites}
      path={routes.favorites}
      element={<Favorites />}
    />
    <Route
      key={routes.following}
      path={`${routes.user}/:id/${routes.following}`}
      element={<Following />}
    />
    ,
  </Route>,
  <Route
    key={routes.addRecipe}
    path={routes.addRecipe}
    element={<AddRecipePage />}
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
