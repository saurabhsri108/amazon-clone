import React from 'react';
import { Link } from 'react-router-dom';
import userinfocss from '../css/UserInfo.module.css';

const UserInfo = ({ username }) => {
  return (
    <section className={userinfocss.user_info}>
      <div className={userinfocss.user_info_box}>
        <div className={userinfocss.personal_detail}>
          <img
            src='https://pbs.twimg.com/profile_images/1404778668468039688/MkSOe8Mv_400x400.jpg'
            alt='Profile Pic'
          />
          <p>Hi, {username || 'Guest'}</p>
        </div>
        <p className={userinfocss.top_links_text}>Top links for you</p>
        <div className={userinfocss.top_links}>
          <Link className={userinfocss.top_links_box} to='/'>
            <img
              src='https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/orders._AC_SR120,80_.png'
              alt='Your Orders'
            />
            <p>Your Orders</p>
          </Link>
          <Link className={userinfocss.top_links_box} to='/'>
            <img
              src='https://m.media-amazon.com/images/G/31/HUD/Dashboard/ProfileCard/976419031._AC_SR120,80_.png'
              alt='Mobiles and Accessories'
            />
            <p>Mobiles and Accesories</p>
          </Link>
          <Link className={userinfocss.top_links_box} to='/'>
            <img
              src='https://m.media-amazon.com/images/G/31/HUD/Dashboard/ProfileCard/6648217031._AC_SR120,80_.png'
              alt='Fashion'
            />
            <p>Fashion</p>
          </Link>
          <Link className={userinfocss.top_links_box} to='/'>
            <img
              src='https://m.media-amazon.com/images/G/31/HUD/Dashboard/ProfileCard/2454178031._AC_SR120,80_.png'
              alt='Grocery'
            />
            <p>Grocery</p>
          </Link>
        </div>
      </div>
      <div className={userinfocss.user_info_box}>
        <h3 className={userinfocss.bills_heading}>
          Pay your credit card bills
        </h3>
        <img
          className={userinfocss.bills_image}
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg'
          alt=''
        />
        <Link className={userinfocss.bills_pay} to='/'>
          Pay Now
        </Link>
      </div>
    </section>
  );
};

export default UserInfo;
