import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainPage from '../../pages/main-page/main-page';

import { TFilmCardInfo } from '../../pages/main-page/main-page';

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