import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { init } from '../../store/init';
import { useAppDispatch } from '../../hooks';

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