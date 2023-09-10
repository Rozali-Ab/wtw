import Logo from '../Logo/Logo';
import UserBlock from '../UserBlock/UserBlock';

function Header() {
  return (
    <header className="page-header user-page__head">
      <Logo />
      <UserBlock />
    </header>
  );
}

export default Header;