import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from './components/Products';
import Cart from './pages/Cart';
import Login from './components/Login';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider';

const App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <main className='app'>
        <Header />
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
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
