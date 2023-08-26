import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../layout';
import MainPage from '../../pages/MainPage/MainPage';
import FilmPage from '../../pages/FilmPage/FilmPage';
import SignInPage from '../../pages/SignIn/SignIn';
import PlayerPage from '../../pages/PlayerPage/PlayerPage';
import HistoryPage from '../../pages/HistoryPage/HistoryPage';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

import { AppRoute, AuthStatus } from '../../const';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { TFilm } from '../../types/film';

type AppProps = {
  films: TFilm[];
}


function App({films}: AppProps) {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={ <Layout/>}>
          <Route index element={ <MainPage films={films} />} />
          <Route path={AppRoute.Film} element={ <FilmPage />} />
          <Route path={AppRoute.History} 
            element={ 
              <PrivateRoute authStatus={AuthStatus.NoAuth}>
                <HistoryPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Favorites} 
            element={ 
              <PrivateRoute authStatus={AuthStatus.Auth}>
                <FavoritesPage />
              </PrivateRoute>
            } 
          />
          <Route path={AppRoute.Login} element={ <SignInPage />} />
          <Route path={AppRoute.Player} 
            element={
              <PrivateRoute authStatus={AuthStatus.Auth}>
                <PlayerPage />
              </PrivateRoute>
            } 
          />
          <Route path="*" element={ <ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;