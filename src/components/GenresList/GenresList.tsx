import { useState } from 'react';

import { changeCurrentGenre } from '../../store/action';

import { TFilm } from '../../types/film';
import { useAppDispatch } from '../../hooks';
import { DEFAULT_NAME_GENRE, MAX_FILMS_GENRES } from '../../const';

type GenresListProps = {
  films: TFilm[];
};

function GenresList({films}: GenresListProps) {
  const dispatch = useAppDispatch();

  const filmsGenres = films.map((film) => film.genre);
  const genres = Array.from(new Set([DEFAULT_NAME_GENRE, ...filmsGenres])).slice(0, MAX_FILMS_GENRES,);

  const [active, setActive] = useState(DEFAULT_NAME_GENRE);

  const handleGenreClick = (genre: string) => (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    setActive(genre);
    dispatch(changeCurrentGenre(genre));
  };
  
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          className={`catalog__genres-item ${
            genre === active ? 'catalog__genres-item--active' : ''
          }`}
          key={genre}
        >
          <a
            className="catalog__genres-link"
            href="!#"
            onClick={handleGenreClick(genre)}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;