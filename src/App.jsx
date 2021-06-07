import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
import SingleProduct from './components/SingleProduct';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setIsLoggedInHandler = () => {
    console.log(isLoggedIn);
    setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };

  return (
    <BrowserRouter>
      <main className='app'>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedInHandler} />
        <Switch>
          <Route path='/cart'>
            <Cart />
          </Route>
          {/* <Route path='/products/single-product'>
            <SingleProduct />
          </Route> */}
          <Route path='/products/asus-store'>
            <Products storepoint='asus' />
          </Route>
          <Route path='/products/acer-store'>
            <Products storepoint='acer' />
          </Route>
          <Route path='/products/groceries'>
            <Products storepoint='groceries' />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;
