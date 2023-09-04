import { useParams } from 'react-router';
import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import FilmCardFull from '../../components/FilmCard/FilmCardFull';
import { PageTitles } from '../../const';
import { TFilm } from '../../types/film';

type FilmPageParams = {
  id: string;
};

type FilmPageProps = {
  films: TFilm[];
}

function FilmPage ({ films }: FilmPageProps) {
  const { id } = useParams<FilmPageParams>();

  const film = films.find((film) => film.id.toString() === id);

  return (
    <Fragment>
      <Helmet>
        <title>{PageTitles.Film}</title>
      </Helmet>

      {film ? (
        <FilmCardFull film={film}/>
      ) : (
        <div>Фильм не найден</div>
      )
      }
    </Fragment>
  );
}

export default FilmPage;