import { useSelector } from 'react-redux';
import { Route, Redirect, useHistory } from 'react-router-dom';

const PublicRoute = ({ children, ...rest }) => {
  const history = useHistory();
  const { isAuth } = useSelector((state) => state.auth);
  {
    /* TEMP FIX KO LANG TO */
  }
  const path = history.location.state?.from.pathname || '/';
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
                pathname: `${path}`,
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
