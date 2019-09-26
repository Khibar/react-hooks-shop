import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../pages/home/HomePage';
import CartPage from '../pages/cart/CartPage';
import ShopPage from '../pages/ShopPage/ShopPage';

function App() {
  return (
    <div className="App">
      <Route path="/shop" component={ShopPage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/" exact component={HomePage} />
    </div>
  );
}

export default App;
