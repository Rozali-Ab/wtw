import { useAppDispatch, useAppSelector } from '../../hooks';
import { addFavorites, deleteFavorites } from '../../store/film-process/film-process';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AuthStatus } from '../../const';

import './MyListButton.css';
import type { TFilm } from '../../types/film';

type MyListBtnProps = {
  film: TFilm;
  min?: boolean;
  className: string;
  isFavorite: boolean;
}

function MyListButton ({ film, min, className = 'small-film-card__mylist', isFavorite }: MyListBtnProps) {
  const dispatch = useAppDispatch();  
  const authStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = authStatus === AuthStatus.Auth;
  const { id } = film;

  const onClickFavorite = (idFilm: number) => {
    if (isFavorite) {
      dispatch(deleteFavorites(idFilm));
      return;
    } 
    dispatch(addFavorites(film));
  };

  return (
    isAuth ? (
      <button 
        onClick={() => onClickFavorite(id)}
        className={`btn btn--list film-card__button ${className} ${min ? 'btn--list-min' : ''}`}
        type="button"
      >
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref={`#${isFavorite ? 'in-list' : 'add'}`}></use>
        </svg>
      </button>
    ) : null
  );
}

export default MyListButton;