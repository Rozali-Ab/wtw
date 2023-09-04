import { Link } from 'react-router-dom';

import MyListButton from '../MyListButton/MyListButton';
import Player from '../Player/Player';
import { TFilm } from '../../types/film';

type SmallFilmCardProps = {
  film: Pick<TFilm, 'id' | 'name' | 'posterImage' | 'previewImage' | 'previewVideoLink'>;
  playing: boolean;
  onMouseOver: (id: number) => void;
  onMouseLeave: () => void;
}

const ImageSize = {
  Width: 280,
  Height: 175,
} as const;

function SmallFilmCard({ film, playing, onMouseOver, onMouseLeave }: SmallFilmCardProps) {
  const {
    id,
    name,
    previewImage,
    previewVideoLink
  } = film;

  
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => onMouseOver(id)}
      onMouseLeave={onMouseLeave}
    >
      <MyListButton className="small-film-card__mylist" id={id} min />
      <Link className="small-film-card__link" to={`/films/${id}`}>
         
        <div className="small-film-card__image">
          <Player
            poster={previewImage}
            src={previewVideoLink}
            width={ImageSize.Width}
            height={ImageSize.Height}
            playing={playing}
            loop
            muted
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