import { Outlet } from 'react-router';

import Header from './Header/Header';
import Footer from './Footer/Footer';

function Layout () {
  return (
    <>
      <section className="film-card">
        <Header />
      </section>
      <Outlet />
      <Footer />
    </>
    
  );
}

export default Layout;