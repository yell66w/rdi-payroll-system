import { useSelector } from 'react-redux';
import { Route, Redirect, useLocation } from 'react-router-dom';

const PublicRoute = ({ children, ...rest }) => {
  const path = useLocation();
  const { isAuth } = useSelector((state) => state.auth);

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
