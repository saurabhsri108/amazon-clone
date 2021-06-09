import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logincss from '../css/Login.module.css';
import { auth } from '../firebase';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = (e) => {
    e.preventDefault();
    // firebase login code
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) history.push('/');
      })
      .catch((err) => alert(err.message));
  };

  const registerHandler = (e) => {
    e.preventDefault();
    // firebase register code
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) history.push('/');
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className={logincss.login}>
      <Link to='/'>
        <img
          className={logincss.logo_img}
          src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
          alt='Amazon Main Logo'
        />
      </Link>
      <div className={logincss.content}>
        <h1>Sign In</h1>
        <form onSubmit={loginHandler}>
          <div className={logincss.formGroup}>
            <label htmlFor='email' className={logincss.formLabel}>
              Email
            </label>
            <input
              type='email'
              id='email'
              className={logincss.formInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={logincss.formGroup}>
            <label htmlFor='passw' className={logincss.formLabel}>
              Password
            </label>
            <input
              type='password'
              id='passw'
              className={logincss.formInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={logincss.formGroup}>
            <button type='submit'>Sign In</button>
          </div>
        </form>
        <div className={logincss.formGroup}>
          <p>
            By continuing, you agree to Amazon's Clone{' '}
            <span>
              <Link to='/'>Conditions of Use</Link>
            </span>{' '}
            and{' '}
            <span>
              <Link to='/'>Privacy Notice</Link>
            </span>{' '}
          </p>
        </div>
        <div className={logincss.formGroup} onClick={registerHandler}>
          <button>Create your Amazon Clone account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
