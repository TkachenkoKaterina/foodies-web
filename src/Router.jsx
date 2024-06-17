import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { routes } from './constants/routes';
import PrivateRoute from './PrivateRoute';
import { PageLoader } from './ui-kit';
const HomePage = lazy(() => import('./pages/HomePage'));
const UserPage = lazy(() => import('./pages/UserPage'));
import Recipes from './pages/UserPage/Recipes';
import Followers from './pages/UserPage/Followers';
import Favorites from './pages/UserPage/Favorites';
import Following from './pages/UserPage/Following';
const AddRecipePage = lazy(() => import('./pages/AddRecipePage/AddRecipePage'));
const RecipePage = lazy(() => import('./pages/RecipePage'));
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const PublicRoutes = [
  <Route key={routes.main} path={routes.main} element={<HomePage />} />,
  <Route
    key={routes.recipe}
    path={`${routes.recipe}/:id`}
    element={<RecipePage />}
  />,
];

const PrivateRoutes = [
  <Route
    key={routes.recipe}
    path={`${routes.recipe}/:id`}
    element={
      <PrivateRoute>
        <div>Recipe Page</div>
      </PrivateRoute>
    }
  />,
  <Route
    key={routes.user}
    path={`${routes.user}/:id`}
    element={
      <PrivateRoute>
        <UserPage />
      </PrivateRoute>
    }
  >
    <Route
      key={routes.recipes}
      path={routes.recipes}
      element={
        <PrivateRoute>
          <Recipes />
        </PrivateRoute>
      }
    />
    <Route
      key={routes.followers}
      path={routes.followers}
      element={
        <PrivateRoute>
          <Followers />
        </PrivateRoute>
      }
    />
    <Route
      key={routes.favorites}
      path={routes.favorites}
      element={
        <PrivateRoute>
          <Favorites />
        </PrivateRoute>
      }
    />
    <Route
      key={routes.following}
      path={`${routes.user}/:id/${routes.following}`}
      element={
        <PrivateRoute>
          <Following />
        </PrivateRoute>
      }
    />
  </Route>,
  <Route
    key={routes.addRecipe}
    path={routes.addRecipe}
    element={<AddRecipePage />}
  />,
];

const RoutesSwitch = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <ScrollToTop />
      <Routes>
        {PublicRoutes}
        {PrivateRoutes}
        <Route path="*" element={<Navigate to={routes.main} />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesSwitch;
