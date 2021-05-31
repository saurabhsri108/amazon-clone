import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setIsLoggedInHandler = () => {
    console.log(isLoggedIn);
    setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };

  return (
    <main className='app'>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedInHandler} />
      <Home />
      <Footer />
    </main>
  );
};

export default App;
