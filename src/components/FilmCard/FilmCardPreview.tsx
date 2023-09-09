import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppRoute } from '../../const';
import { TFilm } from '../../types/film';

type FilmCardProps = {
  film: TFilm;
};

function FilmCard({film}: FilmCardProps) {
  const {
    id,
    name,
    posterImage,
    backgroundImage,
    genre, 
    released
  } = film;
  
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={posterImage} alt={name} width={218} height={327} />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>
            <div className="film-card__buttons">
              <Link to={`/player/${id}`} className="btn film-card__button">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
              </Link>
              <Link to={`${AppRoute.Favorites}`} className="btn film-card__button">
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired, 
    genre: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
  }).isRequired,
};

export default FilmCard;