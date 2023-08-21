import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainPage from '../../pages/main-page/main-page';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: 
        <MainPage />
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;