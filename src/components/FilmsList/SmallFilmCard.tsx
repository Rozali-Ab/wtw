import { Link } from 'react-router-dom';

import MyListButton from '../MyListButton/MyListButton';
import Player from '../Player/Player';
import { TFilm } from '../../types/film';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AuthStatus } from '../../const';

type SmallFilmCardProps = {
  film: TFilm;
  isFavorite: boolean;
}

const ImageSize = {
  Width: 280,
  Height: 175,
} as const;

function SmallFilmCard({ film }: SmallFilmCardProps) {
  const {
    id,
    name,
    previewImage,
    previewVideoLink,
    isFavorite
  } = film;

  const authStatus = useAppSelector(getAuthorizationStatus);
  
  return (
    <article
      className="small-film-card catalog__films-card"
    >
      {authStatus === AuthStatus.Auth? (
        <MyListButton className="small-film-card__mylist" 
          film={film} 
          min 
          isFavorite={isFavorite} 
        />
      ) : null
      }
      
      <Link className="small-film-card__link" to={`/${id}`}>
        <div className="small-film-card__image">
          <Player
            poster={previewImage}
            src={previewVideoLink}
            width={ImageSize.Width}
            height={ImageSize.Height}
          />
        </div>
        <h3 className="small-film-card__title">
          {name}
        </h3>
      </Link>
    </article>
  );
}

export default SmallFilmCard;