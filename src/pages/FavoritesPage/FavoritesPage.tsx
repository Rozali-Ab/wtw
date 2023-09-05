import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import FilmsList from '../../components/FilmsList/FilmsList';
import { PageTitles } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilms, getFilms } from '../../store/film-process/selectors';

function FavoritesPage () {
  const films = useAppSelector(getFilms);
  const favoritesFilms = useAppSelector(getFavoriteFilms);

  const favoriteIds = favoritesFilms.map((favorite) => favorite.id);

  const favoriteMovies = films.filter((film) => favoriteIds.includes(film.id));

  return (
    <Fragment>
      <Helmet>
        <title>{PageTitles.Favorites}</title>
      </Helmet>
      <div className="user-page">

        <section className="catalog">
          <FilmsList films={favoriteMovies}/>
        </section>
      </div>
    </Fragment>
    
  );
}

export default FavoritesPage;