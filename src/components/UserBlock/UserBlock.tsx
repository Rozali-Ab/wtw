import { Link } from 'react-router-dom';

import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { logoutUser } from '../../store/action';

function UserBlock() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.authorizationStatus) === AuthStatus.Auth;
  const user = useAppSelector((state) => state.user);

  const handleLogoutClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutUser());
  };

  return (
    <ul className="user-block">
      {isAuth ? (
        <>
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
        <Link className="user-block__link" to={AppRoute.Login}>
          Sign in
        </Link>
      )}
    </ul>
  );
};

export default UserBlock;