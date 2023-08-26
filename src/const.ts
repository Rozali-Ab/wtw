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
  SignUp = '/signup',
  Player = '/player/:id',
  Film = '/films/:id',
  Favorites = '/favorites',
  History = '/history',
  Search = '/search',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum PageTitles {
  Root = 'What to watch',
  Login = 'Sign in',
  SignUp = 'Sign up',
  Player = 'Player',
  Film = 'Film',
  Favorites = 'Favorites',
  History = 'History',
  Search = 'Search',
  NotFound = 'Page not found',
}