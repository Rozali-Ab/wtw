export enum ApiRoute {
  Films = '/films',
  Login = '/login',
  Favorite = '/favorite',
};

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Logout = '/logout',
  SignUp = '/signup',
  Player = '/player/:id',
  Film = '/films/:id',
  Favorites = '/favorite',
  History = '/history',
  Search = '/search',
  NotFound = '/notfound',
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

export const DEFAULT_NAME_GENRE = 'All genres';
export const MAX_FILMS_GENRES = 10;

export enum HttpCode {
  NotFound = 404,
  NoAuth = 401,
}

export enum NameSpace {
  User = 'USER',
  Films = 'FILMS',
}

export const PUBLIC_URL = 'http://localhost:3000/';