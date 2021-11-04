import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '.';
import Loader from 'components/Loader';
import MainLayout from 'layouts/MainLayout';

const ProtectedRoutes = () => (
  <Switch>
    <MainLayout>
      <Suspense fallback={<Loader primary />}>
        {routes.map(({ component: Component, path, exact }) => (
          <Route path={`/${path}`} key={path} exact={exact}>
            <Component />
          </Route>
        ))}
      </Suspense>
    </MainLayout>
  </Switch>
);

export default ProtectedRoutes;
