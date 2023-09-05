import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { useAppSelector } from '../../hooks';
import Layout from '../layout';
import MainPage from '../../pages/MainPage/MainPage';
import FilmPage from '../../pages/FilmPage/FilmPage';
import SignInPage from '../../pages/SignInPage/SignInPage';
import PlayerPage from '../../pages/PlayerPage/PlayerPage';
import HistoryPage from '../../pages/HistoryPage/HistoryPage';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import SearchPage from '../../pages/SearchPage/SearchPage';
import SignUnPage from '../../pages/SignUpPage/SignUpPage';
import Loader from '../Loader/Loader';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import HistoryRouter from '../HistoryRoute/HistoryRoute';
import history from '../../history';
import { AppRoute } from '../../const';
import { getFilms, getIsFilmsLoading } from '../../store/film-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function App() {
  const isFilmsLoading = useAppSelector(getIsFilmsLoading);
  const films = useAppSelector(getFilms);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (isFilmsLoading) {
    return ( <Loader />);
  }

  return (
    <HistoryRouter history={history}>
      <HelmetProvider>
        <Routes>
          <Route path={AppRoute.Root} element={ <Layout/>}>
            <Route index element={ <MainPage films={films} />} />
            <Route path={AppRoute.Film} element={ <FilmPage films={films}/>} />
            <Route path={AppRoute.History} 
              element={ 
                <PrivateRoute authStatus={authorizationStatus}>
                  <HistoryPage />
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Favorites} 
              element={ 
                <PrivateRoute authStatus={authorizationStatus}>
                  <FavoritesPage />
                </PrivateRoute>
              } 
            />
            <Route path={AppRoute.Login} element={ <SignInPage />} />
            <Route path={AppRoute.SignUp} element={ <SignUnPage />} />
            <Route path={AppRoute.Player} 
              element={
                <PrivateRoute authStatus={authorizationStatus}>
                  <PlayerPage film={films[0]}/>
                </PrivateRoute>
              } 
            />
            <Route path={AppRoute.Search} element={ <SearchPage />} />
            <Route path="*" element={ <ErrorPage />} />
          </Route>
        </Routes>
      </HelmetProvider>
    </HistoryRouter>
  );
}

export default App;