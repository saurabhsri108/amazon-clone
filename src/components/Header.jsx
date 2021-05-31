import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import headercss from '../css/Header.module.css';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  let signInContent = (
    <>
      <p className={headercss.navigation_option_uppertext}>Hello, Sign in</p>
      <p className={headercss.navigation_option_lowertext}>Guest</p>
    </>
  );

  let signInAddress = (
    <>
      <p className={headercss.navigation_option_uppertext}>Hello</p>
      <p className={headercss.navigation_option_lowertext}>
        Select your address
      </p>
    </>
  );

  if (isLoggedIn) {
    signInContent = (
      <>
        <p className={headercss.navigation_option_uppertext}>Welcome back</p>
        <p className={headercss.navigation_option_lowertext}>Saurabh</p>
      </>
    );
    signInAddress = (
      <>
        <p className={headercss.navigation_option_uppertext}>Deliver to</p>
        <p className={headercss.navigation_option_lowertext}>Lucknow, 226016</p>
      </>
    );
  }

  return (
    <header className={headercss.header} id='#header-top'>
      <div className={headercss.amazon_logo}>
        <a href='/' className={headercss.logo}>
          <img
            className={headercss.logo_img}
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt='Amazon Main Logo'
          />
          <span className={headercss.logo_nation}>.in</span>
          <span className={headercss.prime_status}>prime</span>
        </a>
      </div>
      <a href='/' className={headercss.delivery_location}>
        <LocationOnIcon />
        <div>{signInAddress}</div>
      </a>
      <div className={headercss.search}>
        <input
          className={headercss.search_input}
          type='text'
          name='search_filter'
          id='search_filter'
        />
        <SearchIcon className={headercss.search_icon} />
      </div>
      <div className={headercss.navigation}>
        <div className={headercss.navigation_option}>
          <img
            className={headercss.flag_image}
            src='https://img.icons8.com/color/48/000000/india.png'
            alt='Indian Flag Image'
          />
          {/* <img
          className={headercss.flag_image}
            src='https://img.icons8.com/color/48/000000/usa.png'
            alt='USA Flag Image'
          /> */}
        </div>
        <div className={headercss.navigation_option} onClick={setIsLoggedIn}>
          {signInContent}
        </div>
        <div className={headercss.navigation_option}>
          <p className={headercss.navigation_option_uppertext}>Returns</p>
          <p className={headercss.navigation_option_lowertext}>&amp; Orders</p>
        </div>
        <div className={headercss.navigation_option}>
          <span className={headercss.navigation_option_cart_num}>0</span>
          <ShoppingCartIcon className={headercss.cart_icon} />
          <span className={headercss.navigation_option_cart_text}>Cart</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
