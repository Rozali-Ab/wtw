import { TFilm } from '../../types/film';

import type { UserData } from '../../types/userData';

// export const getStateFromLs = (email: string) => {
//   const storedDataString = localStorage.getItem(`${email}`);
//   const state = storedDataString ? JSON.parse(storedDataString) : null;

//   return state;
// };

// export const setStateToLs = (email:string, data: string) => {
//   localStorage.setItem(`${email}`, JSON.stringify(data));
// };

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
  }
};