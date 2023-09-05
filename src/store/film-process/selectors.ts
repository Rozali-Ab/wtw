import { TState } from '../../types/store';
import { NameSpace } from '../../const';

export const getCurrentGenre = (state: TState) => state[NameSpace.Films].currentGenre;

export const getFilms = (state: TState) => state[NameSpace.Films].films;

export const getIsFilmsLoading = (state: TState) => state[NameSpace.Films].isFilmsLoading;

export const getCurrentFilm = (state: TState) => state[NameSpace.Films].currentFilm;

export const getCurrentFilmLoading = (state: TState) => state[NameSpace.Films].currentFilmLoading;

export const getFavoriteFilms = (state: TState) => state[NameSpace.Films].favorite;
