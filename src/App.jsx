import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/home/Home';
import Footer from './components/Footer';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
          <Route path='/cart'>I am cart page</Route>
          <Route path='/product'>I am product page</Route>
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
