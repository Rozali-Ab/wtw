import GenresList from '../GenresList/GenresList';
import FilmsList from '../FilmsList/FilmsList';
import Footer from '../Footer/Footer';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';

import { TFilm } from '../../types/film';

type FilmsCatalogProps = {
  films: TFilm[];
}

function FilmsCatalog({films}: FilmsCatalogProps) {
  return (
    <div className="page-content">
      <section className="catalog">
        <GenresList films={films}/>
        <FilmsList films={films}/>
        <ShowMoreBtn />
      </section>
      <Footer />
    </div>
  );
}

export default FilmsCatalog;