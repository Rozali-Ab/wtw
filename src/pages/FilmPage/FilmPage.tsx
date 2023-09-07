import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

import FilmCardFull from '../../components/FilmCard/FilmCardFull';
import Loader from '../../components/Loader/Loader';
import { useGetFilmByIdQuery } from '../../api/api';

function FilmPage () {
  const params = useParams();

  const { isLoading, isError, data } = useGetFilmByIdQuery(Number(params.id));

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    toast.error('Film is not loaded, please try again');
  }

  if (data) {
    return (
      <>
        <Helmet>
          <title>{`${data.name}`}</title>
        </Helmet>
        <FilmCardFull film={data}/>
      </>
    );
  } else {
    toast.error('Film is not loaded, please try again');
    throw new Error('No data available, try later');
  }

}

export default FilmPage;