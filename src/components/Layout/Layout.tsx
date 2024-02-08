import { Suspense } from 'react';
import { Outlet } from 'react-router';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Spinner from '../Spinner/Spinner';

function Layout () {
  return (
    <div className="user-page">
      <Header />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>

  );
}

export default Layout;