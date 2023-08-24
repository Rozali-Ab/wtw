import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';

function Header() {
  return (
    <header className="page-header">
      <div className="logo">
        <Logo />
      </div>
      <div className="user-block">
        <Link to="login" className="user-block__link">
          Sign in
        </Link>
      </div>
    </header>
  );
}

export default Header;