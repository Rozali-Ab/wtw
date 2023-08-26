import { Fragment } from 'react';

import { TFilm } from '../../../types/film';

type FilmCardOverviewProps = {
  film: TFilm;
};

function FilmCardOverview({film}: FilmCardOverviewProps) {
  const {
    rating,
    scoresCount,
    description,
    director,
    starring
  } = film;

  return (
    <Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {starring.join(', ')}</strong></p>
      </div>
    </Fragment>
  );
}
export default FilmCardOverview;