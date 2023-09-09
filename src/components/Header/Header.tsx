import Logo from '../Logo/Logo';
import UserBlock from '../UserBlock/UserBlock';

function Header() {
  return (
    <header className="page-header ">
      <Logo />
      <UserBlock />
    </header>
  );
}

export default Header;