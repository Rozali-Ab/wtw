import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from '../../pages/MainPage/MainPage';
import FilmPage from '../../pages/FilmPage/FilmPage';
import SignInPage from '../../pages/SignInPage/SignInPage';
import PlayerPage from '../../pages/PlayerPage/PlayerPage';
import AddReviewPage from '../../pages/AddReviewPage/AddReviewPage';
import MyListPage from '../../pages/MyListPage/MyListPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

import { TFilmCardInfo } from '../../pages/MainPage/MainPage';
import { AppRoute } from '../../const';

type AppProps = {
  film: TFilmCardInfo;
}


function App(props: AppProps) {
  const { film } = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={ <MainPage filmCardInfo={film}/>}>
          <Route path={AppRoute.Film} element={ <FilmPage />}></Route>
          <Route path={AppRoute.AddReview} element={ <AddReviewPage />}></Route>
          <Route path={AppRoute.MyList} element={ <MyListPage />}></Route>
          <Route path={AppRoute.Login} element={ <SignInPage />}></Route>
          <Route path={AppRoute.Player} element={ <PlayerPage />}></Route>
          <Route path="*" element={ <ErrorPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;