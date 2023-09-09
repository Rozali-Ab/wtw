import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import FilmsList from '../../components/FilmsList/FilmsList';
import { PageTitles } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilms } from '../../store/filmSlice/selectors';

export function FavoritesPage () {
  const favoritesFilms = useAppSelector(getFavoriteFilms);

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
