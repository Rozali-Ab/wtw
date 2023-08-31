import GenresList from '../GenresList/GenresList';
import FilmsList from '../FilmsList/FilmsList';
import Footer from '../Footer/Footer';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';
import { useAppSelector } from '../../hooks';
import { TFilm } from '../../types/film';
import { DEFAULT_NAME_GENRE } from '../../const';

type FilmsCatalogProps = {
  films: TFilm[];
}

function FilmsCatalog({films}: FilmsCatalogProps) {
  const currentGenre = useAppSelector((state) => state.currentGenre);

  const sortedFilms = films.filter(
    (film) => currentGenre === DEFAULT_NAME_GENRE || currentGenre === film.genre
  );

  return (
    <div className="page-content">
      <section className="catalog">
        <GenresList films={films}/>
        <FilmsList films={sortedFilms}/>
        <ShowMoreBtn />
      </section>
      <Footer />
    </div>
  );
}

export default FilmsCatalog;