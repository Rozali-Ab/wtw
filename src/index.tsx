import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/app/App';

import { store } from './store';
import { sampleFilm } from './const';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App film={sampleFilm}/>
    </Provider>
  </React.StrictMode>
);

