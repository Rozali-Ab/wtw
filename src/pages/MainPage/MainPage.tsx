import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

import { useGetFilmsQuery } from '../../api/api';
import FilmsCatalog from '../../components/FilmsCatalog/FilmsCatalog';
import Loader from '../../components/Loader/Loader';
import FilmCard from '../../components/FilmCard/FilmCardPreview';
import { PageTitles } from '../../const';

function MainPage() {
  const { isLoading, isError, data } = useGetFilmsQuery();

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    toast.error('Films is not loaded, please try again');
  }

  if (data) {
    const promoFilmId = (Math.floor(Math.random() * 25));

    return (
      <Fragment>
        <Helmet>
          <title>{PageTitles.Root}</title>
        </Helmet>
        <FilmCard film={data[promoFilmId]}/>
        <FilmsCatalog films={data}/>
      </Fragment>
    );
  } else {
    toast.error('Film is not loaded, please try again');
    throw new Error('No data available, try later');
  }
}

export default MainPage;