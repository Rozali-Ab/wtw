import { Navigate } from 'react-router';

import { localStorageUtil } from '../utils/localStorageUtils/localStorageUtils';
import { AppRoute } from '../const';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps) {
  const { children } = props;
  const isAuth = localStorageUtil.getAuth();

  return isAuth ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;