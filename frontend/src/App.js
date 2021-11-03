import { lazy, Suspense, useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProtectedRoutes from 'routes/ProtectedRoutes';
import PublicRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';

import { useDispatch, useSelector } from 'react-redux';
import { authSelector, verifyAuth } from 'features/auth/authSlice';
import Loader from 'components/Loader';

const LoginPage = lazy(() => import('pages/Login'));
const NoFoundComponent = lazy(() => import('pages/NoFoundComponent'));

toast.configure({ limit: 3 });

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyAuth());
  }, []);

  return (
    <>
      <Suspense fallback={<Loader primary />}>
        <Switch>
          <PublicRoute path="/login">
            <LoginPage />
          </PublicRoute>
          <PrivateRoute path="/">
            <ProtectedRoutes />
          </PrivateRoute>
          <Route path="*">
            <NoFoundComponent />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
