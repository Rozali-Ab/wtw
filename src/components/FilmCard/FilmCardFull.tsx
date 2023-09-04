import { useState } from 'react';

import { TFilm } from '../../types/film';

import FilmCardNavigation from './FilmCardInfo/FilmCardNavigation';
import FilmCardOverview from './FilmCardInfo/FilmCardOverview';
import FilmCardDetails from './FilmCardInfo/FilmCardDetails';


type FilmCardFullProps = {
  film: TFilm;
};

function FilmCardFull({film}: FilmCardFullProps) {
  const [activeComponent, setActiveComponent] = useState('overview');

  const {
    name,
    posterImage,
    backgroundImage,
    genre,
    released,
  } = film;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
              
        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>
            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width={19} height={19}>
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width={19} height={20}>
                  <use xlinkHref="#add" />
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="film-card__wrap film-card__translate-top" >
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={posterImage} alt={name}width={218} height={327} />
          </div>
          <div className="film-card__desc">
           
            <FilmCardNavigation setActiveComponent={setActiveComponent} activeComponent={activeComponent}/>
            {activeComponent === 'overview' ? (
              <FilmCardOverview film={film} />
            ) : (
              <FilmCardDetails film={film} />
            )}
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilmCardFull;