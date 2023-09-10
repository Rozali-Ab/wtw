import { Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { SignInPage } from '../pages/SignInPage/SignInPage';
import { SignUpPage } from '../pages/SignUpPage/SignUpPage';
import { PlayerPage } from '../pages/PlayerPage/PlayerPage';
import { SearchPage } from '../pages/SearchPage/SearchPage';
import { HistoryPage } from '../pages/HistoryPage/HistoryPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Layout from '../components/Layout/Layout';
import Spinner from '../components/Spinner/Spinner';
import { AppRoute } from '../const';

import PrivateRoute from './PrivateRoute';
import {
  MainPage,
  FavoritesPage,
  FilmPage,
} from './lazy-routes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={AppRoute.Root} element={
      <Suspense fallback={<Spinner />}>
        <Layout />
      </Suspense>}
    >

      <Route index element={<MainPage />} />
      <Route path={AppRoute.NotFound} element={<ErrorPage />} />
      <Route path={AppRoute.Film} element={<FilmPage />} />
      <Route path={AppRoute.Login} element={<SignInPage />} />
      <Route path={AppRoute.SignUp} element={<SignUpPage />} />
      <Route path={AppRoute.Player} element={<PlayerPage />} />
      <Route path={AppRoute.Search} element={<SearchPage />} />
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
    </Route>
  )
);
