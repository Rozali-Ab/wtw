import { Fragment, Suspense } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

import FilmCardFull from '../../components/FilmCard/FilmCardFull';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Spinner from '../../components/Spinner/Spinner';
import { useGetFilmByIdQuery } from '../../api/api';
import { PageTitles } from '../../const';

export function FilmPage () {
  const { id } = useParams();

  const { isLoading, isError, data } = useGetFilmByIdQuery(Number(id));

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    toast.error('Film is not loaded, please try again');
    return <ErrorMessage />;
  }

  if (data) {
    const film = data;
    return (
      <Suspense fallback={<Spinner />}>
        <Fragment>
          <Helmet>
            <title>{PageTitles.Film}</title>
          </Helmet>
          <FilmCardFull film={film}/>
        </Fragment>
      </Suspense>
      
    );
  } else {
    toast.error('Film is not loaded, please try again');
    throw new Error('No data available, try later');
  }
}
