import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import FilmsList from '../../components/FilmsList/FilmsList';
import { PageTitles } from '../../const';
import { useAppSelector } from '../../hooks';

function FavoritesPage () {
  const favoritesFilms = useAppSelector((state) => state.favorite);

  return (
    <Fragment>
      <Helmet>
        <title>{PageTitles.Favorites}</title>
      </Helmet>
      <div className="user-page">

        <section className="catalog">
          <FilmsList films={favoritesFilms}/>
        </section>
      </div>
    </Fragment>
    
  );
}

export default FavoritesPage;