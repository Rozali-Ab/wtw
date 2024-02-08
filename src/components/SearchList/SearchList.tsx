
import { toast } from 'react-toastify';

import { useGetFilmsQuery } from '../../api/api';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilms } from '../../store/filmSlice/selectors';
import SmallFilmCard from '../FilmsList/SmallFilmCard';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

type SearchListProp = {
  query: string;
};

function SearchList({query}: SearchListProp) {
  const favorites = useAppSelector(getFavoriteFilms);
  const isFavoriteCheck = (id: number) => !!favorites.find((item) => item.id === id);
  
  const { isLoading, isError, data } = useGetFilmsQuery({name: query, limit: 10});
  
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
      <div className="page-content">
        <section className="catalog">
          <div className="catalog__films-list">
            {films
              .map((film) => (
                <SmallFilmCard
                  key={film.id}
                  film={film}
                  isFavorite={isFavoriteCheck(film.id)}
                />
              ))}
          </div>

        </section>
      </div>
    );
  }
  return null;
}

export default SearchList;