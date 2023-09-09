import { useState } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';
import { TFilm } from '../../types/film';
import MyListButton from '../MyListButton/MyListButton';
import {  useAppSelector } from '../../hooks';
import { getFavoriteFilms } from '../../store/filmSlice/selectors';

import FilmCardNavigation from './FilmCardInfo/FilmCardNavigation';
import FilmCardOverview from './FilmCardInfo/FilmCardOverview';
import FilmCardDetails from './FilmCardInfo/FilmCardDetails';

type FilmCardFullProps = {
  film: TFilm;
};

function FilmCardFull({film}: FilmCardFullProps) {
  const {
    id,
    name,
    posterImage,
    backgroundImage,
    genre,
    released,
  } = film;

  const favorites = useAppSelector(getFavoriteFilms);
  const isFavoriteFilm = favorites.some((item) => item.id === id);
  const [activeComponent, setActiveComponent] = useState('overview');

  return (
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div> 
        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <MyListButton className="small-film-card__mylist" 
              film={film}
              min 
              isFavorite={isFavoriteFilm}
            />
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
                  <span>My list </span>
                </button>
              </Link>
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