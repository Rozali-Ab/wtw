import { Fragment } from 'react';

import FilmsCatalog from '../../components/FilmsCatalog/FilmsCatalog';
import FilmCard from '../../components/FilmCard/FilmCard';
import { TFilm } from '../../types/film';

type MainPageProps = {
  films: TFilm[];
}

function MainPage({films}: MainPageProps) {

  return(
    <Fragment>
      <FilmCard film={films[0]}/>
      <FilmsCatalog films={films}/>
    </Fragment>
  );
}

export default MainPage;
