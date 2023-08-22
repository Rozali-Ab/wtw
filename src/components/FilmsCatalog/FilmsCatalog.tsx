import GenresList from '../GenresList/GenresList';
import FilmsList from '../FilmsList/FilmsList';
import Footer from '../Footer/Footer';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';

type FilmsCatalogProps = {
  filmsCount: number;
}

function FilmsCatalog({filmsCount}: FilmsCatalogProps) {
  return (
    <div className="page-content">
      <section className="catalog">
        <GenresList />
        <FilmsList filmsCount={filmsCount}/>
        <ShowMoreBtn />
      </section>
      <Footer />
    </div>
  );
}

export default FilmsCatalog;