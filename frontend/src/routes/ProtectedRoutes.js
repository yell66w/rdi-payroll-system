import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import routes from ".";
import MainWrapper from "pages/Home";

const ProtectedRoutes = () => (
  <Switch>
    <MainWrapper>
      <Suspense fallback={"Loading"}>
        {routes.map(({ component: Component, path, exact }) => (
          <Route path={`/${path}`} key={path} exact={exact}>
            <Component />
          </Route>
        ))}
      </Suspense>
    </MainWrapper>
  </Switch>
);

export default ProtectedRoutes;
