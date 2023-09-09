import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { getHistory } from '../../store/filmSlice/selectors';
import { AppRoute, PageTitles } from '../../const';
import { useAppSelector } from '../../hooks';

import type { THistory } from '../../types/userData';

export function HistoryPage() {
  const historyOfSearch = useAppSelector(getHistory);
  return (
    <Fragment>
      <Helmet>
        <title>{PageTitles.History}</title>
      </Helmet>
      <div className="page-content">
        <div className="user-block__link">Your search</div>
        <section className="catalog">
          <ol>
            {historyOfSearch.map((query: THistory, index: number) => (
              <li key={index}>{query.toString()}</li>
            ))}
          </ol>
        </section>
        <div className="film-card__buttons">
          <button className="btn btn--play film-card__button" type="button">
            <Link className="user-block__link" to={AppRoute.Search}>Back to Search </Link>
          </button>
        </div>
      </div>
      

    </Fragment>
  );
}
  
