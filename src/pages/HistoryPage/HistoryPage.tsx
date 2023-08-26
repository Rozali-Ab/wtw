import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import { PageTitles } from '../../const';

function HistoryPage() {
  return (
    <Fragment>
      <Helmet>
        <title>{PageTitles.History}</title>
      </Helmet>
      <div>HistoryPage</div>
    </Fragment>
  );
}
  

export default HistoryPage;