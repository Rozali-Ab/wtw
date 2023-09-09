import { lazy } from 'react';

export const MainPage = lazy(() =>
  import('../pages/MainPage/MainPage').then((module) => ({
    default: module.MainPage}))
);

export const FavoritesPage = lazy(() =>
  import('../pages/FavoritesPage/FavoritesPage').then((module) => ({
    default: module.FavoritesPage,
  }))
);

export const FilmPage = lazy(() =>
  import('../pages/FilmPage/FilmPage').then((module) => ({
    default: module.FilmPage,
  }))
);


