import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Layout from '../layout';
import MainPage from '../../pages/MainPage/MainPage';
import FilmPage from '../../pages/FilmPage/FilmPage';
import SignInPage from '../../pages/SignInPage/SignInPage';
import PlayerPage from '../../pages/PlayerPage/PlayerPage';
import HistoryPage from '../../pages/HistoryPage/HistoryPage';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

import { AppRoute, AuthStatus } from '../../const';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { useAppSelector } from '../../hooks';


function App() {
  const films = useAppSelector((state) => state.films);
  
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path={AppRoute.Root} element={ <Layout/>}>
            <Route index element={ <MainPage films={films} />} />
            <Route path={AppRoute.Film} element={ <FilmPage films={films}/>} />
            <Route path={AppRoute.History} 
              element={ 
                <PrivateRoute authStatus={AuthStatus.Auth}>
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
                  <PlayerPage film={films[0]}/>
                </PrivateRoute>
              } 
            />
            <Route path="*" element={ <ErrorPage />} />
          </Route>
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;