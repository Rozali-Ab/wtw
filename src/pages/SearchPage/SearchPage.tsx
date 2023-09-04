import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { useAppSelector } from '../../hooks';
import FilmsList from '../../components/FilmsList/FilmsList';
import { TFilm } from '../../types/film';

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const films: TFilm[] = useAppSelector((state) => state.films);
  const [searchResults, setSearchResults] = useState<TFilm[]>([]);

  const filteredFilms: TFilm[] = films.filter((film) => film.name.toLocaleLowerCase().includes(searchQuery.toLowerCase()));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setSearchQuery(searchQuery);
    setSearchResults(filteredFilms);
  };

  return (
    <>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <div className="user-page">
        <div className="page-content">
          <section className="catalog">
            <p>
              <input 
                type="search" 
                placeholder="search" 
                value={searchQuery}
                onChange={handleChange}
              />
            </p>
            {searchResults.length === 0 && searchQuery.length >= 3 && (
              <p>No results found.</p>
            )}
            {searchResults.length >=2 && (
              <p>Recommended for viewing</p>
            )}
            <FilmsList films={searchResults}/>
          </section>
        </div>
      </div>
    </>
  );
}

export default SearchPage;