import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { AppRoute, PageTitles } from '../../const';

export function PlayerPage() {
  const videoLink = 'https://10.react.pages.academy/static/film/video/bike.mp4';
  const previewImage = 'https://10.react.pages.academy/static/film/preview/legend.jpg';

  return (
    <Fragment>
      <Helmet>
        <title>{PageTitles.Player}</title>
      </Helmet>
      <div className="player">
        <video src={videoLink} className="player__video" poster={previewImage} />
        <Link to={AppRoute.Root}>
          <button type="button" className="player__exit">Exit</button>
        </Link>
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={30} max={100} />
              <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>
          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width={19} height={19}>
                <use xlinkHref="#play-s" />
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>
            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width={27} height={27}>
                <use xlinkHref="#full-screen" />
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

