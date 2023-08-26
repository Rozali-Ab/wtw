import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import { PageTitles } from '../../const';

function FilmPage () {
  return (
    <Fragment>
      <Helmet>
        <title>{PageTitles.Film}</title>
      </Helmet>
      <div>Film Page</div>
    </Fragment>
  );
}

export default FilmPage;