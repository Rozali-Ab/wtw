export const sampleFilm = {
  poster: 'img/the-grand-budapest-hotel-poster.jpg',
  title: 'The Grand Budapest Hotel',
  meta: {
    genre: 'Drama',
    year: 2014,
  },
};

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Player = '/player/:id',
  Film = '/films/:id',
  Favorites = '/favorites',
  History = '/history',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}