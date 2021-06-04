import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';

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
            <Cart items={[{}]} />
          </Route>
          <Route path='/products/asus-store'>
            <Products storePoint='asus' />
          </Route>
          <Route path='/products/acer-store'>
            <Products storePoint='acer' />
          </Route>
          <Route path='/products/groceries'>
            <Products storePoint='groceries' />
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
