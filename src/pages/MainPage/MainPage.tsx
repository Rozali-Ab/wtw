import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import FilmsCatalog from '../../components/FilmsCatalog/FilmsCatalog';
import FilmCard from '../../components/FilmCard/FilmCardPreview';
import { TFilm } from '../../types/film';
import { PageTitles } from '../../const';

type MainPageProps = {
  films: TFilm[];
}

function MainPage({films}: MainPageProps) {

  return(
    <Fragment>
      <Helmet>
        <title>{PageTitles.Root}</title>
      </Helmet>
      <FilmCard film={films[0]}/>
      <FilmsCatalog films={films}/>
    </Fragment>
  );
}

export default MainPage;
