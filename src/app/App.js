import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../pages/home/HomePage';
import CartPage from '../pages/cart/CartPage';
import ShopPage from '../pages/ShopPage/ShopPage';
import ShopSingleItem from '../pages/ShopSingleItem/ShopSingleItem';
import CollectionPage from '../pages/Collection/CollectionPage.js';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../UI/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path="/collection" component={CollectionPage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/item/:id" component={ShopSingleItem} />
      <Route path="/" exact component={HomePage} />
      <Footer />
    </div>
  );
}

export default App;
