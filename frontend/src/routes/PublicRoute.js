import { Route, Redirect, useLocation } from 'react-router-dom';

const PublicRoute = ({ children, isAuth, ...rest }) => {
  const path = useLocation();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuth ? (
          children
        ) : (
          <>
            <Redirect
              to={{
                pathname: `${path?.state?.from?.pathname || path.pathname}`,
                state: { from: location }
              }}
            />
          </>
        )
      }
    />
  );
};

export default PublicRoute;
