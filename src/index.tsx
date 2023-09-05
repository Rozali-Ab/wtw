import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {ToastContainer} from 'react-toastify';

import App from './components/App/App';
import { store } from './store';
import 'react-toastify/dist/ReactToastify.css';
import { fetchFilms, fetchUserStatus } from './store/api-action';

store.dispatch(fetchFilms());
store.dispatch(fetchUserStatus());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);

