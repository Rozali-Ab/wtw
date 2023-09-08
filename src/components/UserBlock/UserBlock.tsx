import { Link } from 'react-router-dom';

import { AppRoute, AuthStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { clearFavorites, clearHistory } from '../../store/film-process/film-process';
import { logOut } from '../../store/user-process/user-process';
import { localStorageUtil } from '../../utils/localStorageUtils/localStorageUtils';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

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
          <li>
            <Link className="user-block__link" to={AppRoute.Search}>
              Search||
            </Link>
          </li>
          <li>
            <Link className="user-block__link" to={AppRoute.Favorites}>
            Favorites
            </Link>
          </li>
          <li className="user-block__item">
            <div className="user-block__avatar">
            </div>
          </li>
          <li className="user-block__item">
            <Link className="user-block__link" to={AppRoute.Root} onClick={handleLogoutClick}>
              Sign out
            </Link>
          </li>
        </>
      ) : (
        <li>
          <Link className="user-block__link" to={AppRoute.Login}>
            Sign in
          </Link>
        </li>
      )}
    </ul>
  );
};

export default UserBlock;