import { TFilm } from '../../types/film';

import SmallFilmCard from './SmallFilmCard';

type FilmsListProps = {
  films: TFilm[];
}
function FilmsList({films}: FilmsListProps) {
  return (
    <div className="catalog__films-list">    
      {films.map((film) => (
        <SmallFilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}

export default FilmsList;