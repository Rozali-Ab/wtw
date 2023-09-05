import { Link } from 'react-router-dom';

import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { logoutUser } from '../../store/api-action';
import { getAuthorizationStatus, getUserData } from '../../store/user-process/selectors';

function UserBlock() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthorizationStatus) === AuthStatus.Auth;
  const user = useAppSelector(getUserData);
  const email = user?.email;
  
  const handleLogoutClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    if (email) {
      dispatch(logoutUser(email));
    }
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
              <img src={user?.avatarUrl} alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a 
              href="!#"
              className="user-block__link"
              onClick={handleLogoutClick}
            >
              Sign out
            </a>
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