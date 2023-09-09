import { TState } from '../../types/store';
import { NameSpace } from '../../const';

export const getCurrentGenre = (state: TState) => state[NameSpace.Films].currentGenre;

export const getFavoriteFilms = (state: TState) => state[NameSpace.Films].favorite;

export const getHistory = (state: TState) => state[NameSpace.Films].history;
