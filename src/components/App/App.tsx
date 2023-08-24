import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../layout';
import MainPage from '../../pages/MainPage/MainPage';
import FilmPage from '../../pages/FilmPage/FilmPage';
import SignInPage from '../../pages/SignIn/SignIn';
import PlayerPage from '../../pages/PlayerPage/PlayerPage';
import AddReviewPage from '../../pages/AddReviewPage/AddReviewPage';
import MyListPage from '../../pages/MyListPage/MyListPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

import { TFilmCardInfo } from '../../pages/MainPage/MainPage';
import { AppRoute, AuthStatus } from '../../const';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

type AppProps = {
  film: TFilmCardInfo;
}


function App(props: AppProps) {
  const { film } = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={ <Layout/>}>
          <Route index element={ <MainPage filmCardInfo={film}/>} />
          <Route path={AppRoute.Film} element={ <FilmPage />} />
          <Route path={AppRoute.AddReview} 
            element={ 
              <PrivateRoute authStatus={AuthStatus.NoAuth}>
                <AddReviewPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.MyList} 
            element={ 
              <PrivateRoute authStatus={AuthStatus.NoAuth}>
                <MyListPage />
              </PrivateRoute>
            } 
          />
          <Route path={AppRoute.Login} element={ <SignInPage />} />
          <Route path={AppRoute.Player} 
            element={
              <PrivateRoute authStatus={AuthStatus.NoAuth}>
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