import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainPage from '../../pages/MainPage/MainPage';

import { TFilmCardInfo } from '../../pages/MainPage/MainPage';

type TAppProps = {
  film: TFilmCardInfo;
}

function App(props: TAppProps) {
  const { film } = props;
  const router = createBrowserRouter([
    {
      path: '/',
      element: 
        <MainPage filmCardInfo={film}/>
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;