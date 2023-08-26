import { Helmet } from 'react-helmet-async';

import Header from '../../components/Header/Header';
import { PageTitles } from '../../const';

function ErrorPage () {
  return (
    <>
      <Helmet>
        <title>{PageTitles.NotFound}</title>
      </Helmet>
      <Header />
      <div> page not found</div>
    </>
  );
}

export default ErrorPage;