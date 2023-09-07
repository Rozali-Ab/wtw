import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import Layout from '../Layout/Layout';
import MainPage from '../../pages/MainPage/MainPage';
import FilmPage from '../../pages/FilmPage/FilmPage';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';
import SignInPage from '../../pages/SignInPage/SignInPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PlayerPage from '../../pages/PlayerPage/PlayerPage';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import HistoryPage from '../../pages/HistoryPage/HistoryPage';
import SearchPage from '../../pages/SearchPage/SearchPage';
import { AppRoute } from '../../const';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path={AppRoute.Root} element={<Layout />}>
      <Route index element={ <MainPage />} />
      <Route path={AppRoute.NotFound} element={<ErrorPage />} />
      <Route 
        path={AppRoute.Root} 
        element={
          <ErrorBoundary FallbackComponent={ErrorPage}>
            <Layout />
          </ErrorBoundary>
        }>
        <Route path={AppRoute.Film} element={ <FilmPage />} />
        <Route path={AppRoute.Login} element={ <SignInPage />} />
        <Route path={AppRoute.SignUp} element={ <SignUpPage />} />
        <Route path={AppRoute.Player} element={ <PlayerPage />} />
        <Route path={AppRoute.Favorites} 
          element={ 
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          } 
        />
        <Route path={AppRoute.History} 
          element={ 
            <PrivateRoute>
              <HistoryPage />
            </PrivateRoute>
          } 
        />
        <Route path={AppRoute.Search} 
          element={ 
            <PrivateRoute>
              <SearchPage />
            </PrivateRoute>
          } 
        />
      </Route>
    </Route>
  )
);