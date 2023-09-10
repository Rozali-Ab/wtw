import { Outlet } from 'react-router';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout () {
  return (
    <div className="user-page">
      <Header />
      <Outlet />
      <Footer />
    </div>

  );
}

export default Layout;