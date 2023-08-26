import Logo from '../Logo/Logo';

function Footer() {
  return (
    <footer className="page-footer">
      <Logo isLight/>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;