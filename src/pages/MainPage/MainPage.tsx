import { Fragment, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

import { useGetFilmsQuery } from '../../api/api';
import FilmsCatalog from '../../components/FilmsCatalog/FilmsCatalog';
import FilmCard from '../../components/FilmCard/FilmCardPreview';
import { PageTitles } from '../../const';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Spinner from '../../components/Spinner/Spinner';

export function MainPage() {
  const page = (Math.floor(Math.random() * 10));
  const { isLoading, isError, data } = useGetFilmsQuery({limit: 20, page});

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    toast.error('Films is not loaded, please try again');
    return <ErrorMessage />;
  }

  if (data) {
    const promoFilmId = (Math.floor(Math.random() * 10));

    return (
      <Suspense fallback={<Spinner />}>
        <Fragment>
          <Helmet>
            <title>{PageTitles.Root}</title>
          </Helmet>
          <FilmCard film={data[promoFilmId]}/>
          <FilmsCatalog films={data}/>
        </Fragment>
      </Suspense>
    );
  } else {
    toast.error('Film is not loaded, please try again');
    throw new Error('No data available, try later');
  }
}
