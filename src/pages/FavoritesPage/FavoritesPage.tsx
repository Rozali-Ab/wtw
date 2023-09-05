import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import FilmsList from '../../components/FilmsList/FilmsList';
import { PageTitles } from '../../const';
import { useAppSelector } from '../../hooks';

function FavoritesPage () {
  const films = useAppSelector((state) => state.films);
  const favoritesFilms = useAppSelector((state) => state.favorite);

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