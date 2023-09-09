import { Link } from 'react-router-dom';

import { AppRoute, AuthStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { clearFavorites, clearHistory } from '../../store/filmSlice/filmSlice';
import { logOut } from '../../store/userSlice/userSlice';
import { localStorageUtil } from '../../utils/localStorageUtils/localStorageUtils';
import { getAuthorizationStatus } from '../../store/userSlice/selectors';

function UserBlock() {
  const dispatch = useAppDispatch();
  //const isAuth = localStorageUtil.getAuth();
  const auth = useAppSelector(getAuthorizationStatus);
  const isAuth = auth === AuthStatus.Auth;
  
  const handleLogoutClick = () => {
    localStorageUtil.setAuth('');
    dispatch(logOut());
    dispatch(clearFavorites());
    dispatch(clearHistory());
  };

  return (
    <ul className="user-block">
      {isAuth ? (
        <>
          <li className="user-block__item">
            <Link className="user-block__link" to={AppRoute.Search}>
              Search
            </Link>
          </li>
          <li className="user-block__item">
            <Link className="user-block__link" to={AppRoute.Favorites}>
            Favorites
            </Link>
          </li>
          <li className="user-block__item">
            <Link className="user-block__link" to={AppRoute.History}>History</Link>
          </li>
          <li className="user-block__item">
            <Link className="user-block__link" to={AppRoute.Root} onClick={handleLogoutClick}>
              Sign out
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className="user-block__item">
            <Link className="user-block__link" to={AppRoute.Search}>
              Search
            </Link>
          </li>
          <li className="user-block__item">
            <Link className="user-block__link" to={AppRoute.Login}>
              Sign in
            </Link>
          </li>
          <li className="user-block__item">
            <Link className="user-block__link" to={AppRoute.SignUp}>
              SIGN UP
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default UserBlock;