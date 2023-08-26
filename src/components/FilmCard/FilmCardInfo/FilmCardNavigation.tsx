import { Link } from 'react-router-dom';

type FilmCardNavigationProps = {
  setActiveComponent: (component: string) => void;
  activeComponent: string;
};

function FilmCardNavigation({setActiveComponent, activeComponent}: FilmCardNavigationProps) {

  const handleComponentChange = (component: string) => {
    setActiveComponent(component);
  };

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={`film-nav__item ${activeComponent === 'overview' ? 'film-nav__item--active' : ''}`}>
          <Link to="" className="film-nav__link" onClick={() => handleComponentChange('overview')}>
            Overview
          </Link>
        </li>
        <li className={`film-nav__item ${activeComponent === 'details' ? 'film-nav__item--active' : ''}`}>
          <Link to="" className="film-nav__link" onClick={() => handleComponentChange('details')}>
            Details
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default FilmCardNavigation;