import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from '../../pages/MainPage/MainPage';
import FilmPage from '../../pages/FilmPage/FilmPage';
import SignInPage from '../../pages/SignInPage/SignInPage';
import PlayerPage from '../../pages/PlayerPage/PlayerPage';
import AddReviewPage from '../../pages/AddReviewPage/AddReviewPage';
import MyListPage from '../../pages/MyListPage/MyListPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

import { TFilmCardInfo } from '../../pages/MainPage/MainPage';

type AppProps = {
  film: TFilmCardInfo;
}


function App(props: AppProps) {
  const { film } = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainPage filmCardInfo={film}/>}>
          <Route path="films/:id" element={ <FilmPage />}></Route>
          <Route path="films/:id/review" element={ <AddReviewPage />}></Route>
          <Route path="mylist" element={ <MyListPage />}></Route>
          <Route path="login" element={ <SignInPage />}></Route>
          <Route path="player/:id" element={ <PlayerPage />}></Route>
          <Route path="*" element={ <ErrorPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;