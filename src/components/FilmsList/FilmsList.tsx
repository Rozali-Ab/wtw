import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilms } from '../../store/filmSlice/selectors';

import SmallFilmCard from './SmallFilmCard';

import type{ TFilm } from '../../types/film';

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

FilmsList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      previewVideoLink: PropTypes.string.isRequired,
    })
  )
};

export default FilmsList;