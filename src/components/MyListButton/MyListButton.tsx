import { useNavigate } from 'react-router';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { postFavoriteFilms } from '../../store/api-action';
import { AppRoute, AuthStatus } from '../../const';
import { TFilmId } from '../../types/film';
import './MyListButton.css';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getFavoriteFilms } from '../../store/film-process/selectors';

type MyListBtnProps = {
  id: TFilmId;
  min?: boolean;
  className?: string;
}

function MyListButton ({ id, min, className = '' }: MyListBtnProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = authStatus === AuthStatus.Auth;
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const isFavorite = favoriteFilms.some((film) => film.id === id);

  const onChangeFavorite = async () => {
    if (isAuth) {
      await dispatch(
        postFavoriteFilms({
          filmId: id,
          status: Number(!isFavorite),
        })
      );
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <button 
      onClick={onChangeFavorite}
      className={`btn btn--list film-card__button ${className} ${min ? 'btn--list-min' : ''}`}
      type="button"
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={`#${isFavorite ? 'in-list' : 'add'}`}></use>
      </svg>
    </button>
  );
}

export default MyListButton;