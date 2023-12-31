import { TFilm } from '../../types/film';

import type { THistory, UserData } from '../../types/userData';

export const localStorageUtil = {
  getItem: (key: string): UserData | null => {
    const user = localStorage.getItem(key);
    if (user) return JSON.parse(user);
    return null;
  },

  setItem: (key: string, value: UserData): void => {
    const item = JSON.stringify(value);
    localStorage.setItem(key, item);
  },
  setAuth: (name: string): void => localStorage.setItem('auth', name),

  getAuth: (): string | null => localStorage.getItem('auth'),

  addFavorite: (key: string, film: TFilm) => {
    const user = localStorage.getItem(key);
    if (user) {
      const parsedUser = JSON.parse(user);
      localStorage.setItem(
        key,
        JSON.stringify({...parsedUser, favorites: [...parsedUser.favorites, film]})
      );
    }
  },

  deleteFavorite: (key: string, id: number) => {
    const user = localStorage.getItem(key);
    if (user) {
      const parsedUser = JSON.parse(user);
      const updateFavorites = parsedUser.favorites.filter(
        (item: TFilm) => item.id !== id 
      );
      localStorage.setItem(
        key,
        JSON.stringify({...parsedUser, favorites: updateFavorites})
      );
    }
  },
  getSearchHistory: (key: string): THistory[] | null => {
    const user = localStorage.getItem(key);
    if (user) {
      const parsedUserData = JSON.parse(user);
      return parsedUserData.history;
    }
    return null;
  },

  setSearchHistory: (key: string, history: THistory[]): void => {
    const user = localStorage.getItem(key);
    if (user) {
      const parsedUserData = JSON.parse(user);
      parsedUserData.history = history;
      localStorage.setItem(key, JSON.stringify(parsedUserData));
    }
  },

};