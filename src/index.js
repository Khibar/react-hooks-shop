import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import configureCartStore from './useStore/cartStore';
import configureProductsStore from './useStore/productStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';

configureCartStore();
configureProductsStore();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById('root')
);

serviceWorker.unregister();
