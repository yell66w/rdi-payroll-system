import { lazy, Suspense, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProtectedRoutes from "routes/ProtectedRoutes";
import PublicRoute from "routes/PublicRoute";
import PrivateRoute from "routes/PrivateRoute";

import { useSelector } from "react-redux";
import { authSelector } from "features/auth/authSlice";

const LoginPage = lazy(() => import("pages/Login"));
const NoFoundComponent = lazy(() => import("pages/NoFoundComponent"));

toast.configure({ limit: 3 });

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const { isFetching } = useSelector(authSelector);

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) setIsAuth(true);
    else setIsAuth(false);
  }, [token, isFetching]);

  return (
    <>
      <Suspense fallback={"Loading"}>
        <Switch>
          <PublicRoute path="/login" isAuth={isAuth}>
            <LoginPage />
          </PublicRoute>
          <PrivateRoute path="/" isAuth={isAuth}>
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
