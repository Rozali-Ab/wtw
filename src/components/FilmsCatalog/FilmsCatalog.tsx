import GenresList from '../GenresList/GenresList';
import FilmsList from '../FilmsList/FilmsList';
import { useAppSelector } from '../../hooks';
import { TFilm } from '../../types/film';
import { DEFAULT_NAME_GENRE } from '../../const';
import { getCurrentGenre } from '../../store/filmSlice/selectors';

type FilmsCatalogProps = {
  films: TFilm[];
}

function FilmsCatalog({films}: FilmsCatalogProps) {
  const currentGenre = useAppSelector(getCurrentGenre);

  const sortedFilms = films.filter(
    (film) => currentGenre === DEFAULT_NAME_GENRE || currentGenre === film.genre
  );

  return (
    <div className="page-content">
      <section className="catalog">
        <GenresList films={films}/>
        <FilmsList films={sortedFilms} maxFilms={8} withWhowMoreBtn/>
      </section>
    </div>
  );
}

export default FilmsCatalog;