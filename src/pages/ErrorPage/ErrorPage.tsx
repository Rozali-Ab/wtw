import { Helmet } from 'react-helmet-async';

import { PageTitles } from '../../const';

function ErrorPage () {
  return (
    <>
      <Helmet>
        <title>{PageTitles.NotFound}</title>
      </Helmet>
      <div className="catalog">Page not found</div>
    </>
  );
}

export default ErrorPage;