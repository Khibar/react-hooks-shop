import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import ItemsProvider from './context/ItemsContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';

ReactDOM.render(
  <ItemsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ItemsProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
