import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { PageTitles } from '../../const';

function FavoritesPage () {
  return (
    <Fragment>
      <Helmet>
        <title>{PageTitles.Favorites}</title>
      </Helmet>
      <div className="user-page">
        <Header />

        <section className="catalog">
        </section>
        <Footer />
      </div>
    </Fragment>
    
  );
}

export default FavoritesPage;