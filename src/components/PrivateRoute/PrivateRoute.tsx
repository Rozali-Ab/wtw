import { Navigate } from 'react-router';

import { AppRoute, AuthStatus } from '../../const';

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps) {
  const { authStatus, children } = props;
  const isAuth = authStatus === AuthStatus.Auth;


  return isAuth ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;