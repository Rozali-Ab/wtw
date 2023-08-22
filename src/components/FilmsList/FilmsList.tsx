import SmallFilmCard from './SmallFilmCard';

type TFilmsList = {
  filmsCount: number;
}
function FilmsList({filmsCount}: TFilmsList) {
  return (
    <div className="catalog__films-list">    
      {Array.from({ length: filmsCount }, (_, i) => (
        <SmallFilmCard key={i} />
      ))}
    </div>
  );
}

export default FilmsList;