import { Fragment, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

import FilmsList from '../../components/FilmsList/FilmsList';
import { PageTitles } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilms } from '../../store/filmSlice/selectors';
import Spinner from '../../components/Spinner/Spinner';

export function FavoritesPage () {
  const favoritesFilms = useAppSelector(getFavoriteFilms);

  return (
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
    
    
  );
}
