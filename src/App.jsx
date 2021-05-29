import React from 'react';
import Header from './components/Header';

import './App.css';
import Home from './components/Home';

const App = () => {
  return (
    <main className='app'>
      <Header />
      <Home />
    </main>
  );
};

export default App;
