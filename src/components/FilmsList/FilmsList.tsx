import { useEffect, useRef, useState } from 'react';

import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';
import { TFilm } from '../../types/film';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilms } from '../../store/film-process/selectors';

import SmallFilmCard from './SmallFilmCard';

type FilmsListProps = {
  films: TFilm[];
  maxFilms?: number;
  withWhowMoreBtn?: boolean;
};

function FilmsList({ films, maxFilms = films.length, withWhowMoreBtn}: FilmsListProps) {
  const filmsLength = films.length;
  const favorites = useAppSelector(getFavoriteFilms);
  const FILM_COUNT_PER_STEP = maxFilms;
  const isFavoriteCheck = (id: number) => !!favorites.find((item) => item.id === id);

  const [renderedFilmCount, setRenderedFilmCount] = useState(
    Math.min(FILM_COUNT_PER_STEP, filmsLength),
  );

  useEffect(() => {
    setRenderedFilmCount(Math.min(FILM_COUNT_PER_STEP, filmsLength));
  }, [films, FILM_COUNT_PER_STEP, filmsLength]);

  const [activeFilmCard, setActiveFilmCard] = useState<number | null>(null);
  const timer = useRef<NodeJS.Timeout>();

  const cardMouseOverHandler = (id: number) => {
    timer.current = setTimeout(() => {
      setActiveFilmCard(id);
    }, 1000);
  };

  const cardMouseLeaveHandler = () => {
    setActiveFilmCard(null);
    if (timer.current) {
      clearTimeout(timer.current);
    }
  };

  const clickShowMoreBtnHandler = () =>
    setRenderedFilmCount(() => {
      const newRenderedFilmsCount = Math.min(filmsLength, renderedFilmCount + FILM_COUNT_PER_STEP);
      return newRenderedFilmsCount;
    });

  return (
    <>
      <div className="catalog__films-list">
        {films
          .filter((_, idx) => idx + 1 <= renderedFilmCount)
          .map((film) => (
            <SmallFilmCard
              key={film.id}
              film={film}
              onMouseOver={cardMouseOverHandler}
              onMouseLeave={cardMouseLeaveHandler}
              playing={film.id === activeFilmCard}
              isFavorite={isFavoriteCheck(film.id)}
            />
          ))}
      </div>
      {withWhowMoreBtn && renderedFilmCount < films.length && (
        <ShowMoreBtn onClick={clickShowMoreBtnHandler} />
      )}
    </>
  );
}

export default FilmsList;