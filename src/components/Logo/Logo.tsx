import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';

type LogoProps = {
  isLight?: boolean;
}

function Logo( {isLight}: LogoProps) {
  return (
    <div className="logo">
      <Link to={AppRoute.Root} className={`logo__link ${isLight ? 'logo__link--light' : ''}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
