
import { toast } from 'react-toastify';

import { useGetFilmByQueryQuery } from '../../api/api';

import SmallFilmCard from '../FilmsList/SmallFilmCard';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

type SearchListProp = {
  query: string;
};

function SearchList({query}: SearchListProp) {
  
  const { isLoading, isError, data } = useGetFilmByQueryQuery({name: query, limit: 10});
  
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    toast.error('Films is not loaded, please try again');
    return <ErrorMessage />;
  }

  if (data) {
    const films = data;

    return (
      <div className="catalog__films-list">
        {films
          .map((film) => (
            <SmallFilmCard
              key={film.id}
              film={film}
              isFavorite={film.isFavorite}
            />
          ))}
      </div>
    );
  }
  return null;
}

export default SearchList;