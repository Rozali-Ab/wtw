import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';

//import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { useAppDispatch } from '../../hooks';
import { init } from '../../store/init';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { router } from '../../routing/router';

function App() {
  const dispatch = useAppDispatch();
  dispatch(init());
 
  return (
    <HelmetProvider>
      <ErrorBoundary fallback={<ErrorMessage />}>
        <RouterProvider router={router}/>
      </ErrorBoundary>
    </HelmetProvider>  
  );

}

export default App;