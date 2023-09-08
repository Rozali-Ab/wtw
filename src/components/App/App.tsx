import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { useAppDispatch } from '../../hooks';
import { init } from '../../store/init';

import { router } from './router';

function App() {
  const dispatch = useAppDispatch();
  dispatch(init());
 
  return (
    <HelmetProvider>
      <RouterProvider router={router}/>
    </HelmetProvider>  
  );

}

export default App;