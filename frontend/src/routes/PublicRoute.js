import { Route, Redirect, useLocation } from 'react-router-dom';

const PublicRoute = ({ children, isAuth, ...rest }) => {
  const _location = useLocation();

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
                pathname: `${_location?.state?.from?.pathname || _location.pathname}`,
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
