import React from 'react';
import footercss from '../css/Footer.module.css';

const Footer = () => {
  return (
    <footer className={footercss.footer}>
      <a href='#header-top' className={footercss.top}>
        <p>Back to top</p>
      </a>
      <section className={footercss.middle}>
        <div>
          <p>Get to Know Us</p>
          <a href='/'>About Us</a>
          <a href='/'>Careers</a>
          <a href='/'>Press Releases</a>
          <a href='/'>Amazon Cares</a>
          <a href='/'>Gift a Smile</a>
        </div>
        <div>
          <p>Connect with Us</p>
          <a href='/'>Facebook</a>
          <a href='/'>Twitter</a>
          <a href='/'>Instagram</a>
        </div>
        <div>
          <p>Make Money with Us</p>
          <a href='/'>Sell on Amazon</a>
          <a href='/'>Sell under Amazon Accelerator</a>
          <a href='/'>Amazon Global Selling</a>
          <a href='/'>Become an Affiliate</a>
        </div>
        <div>
          <p>Let Us Help You</p>
          <a href='/'>Your Account</a>
          <a href='/'>Returns Centre</a>
          <a href='/'>100% Purchase Protection</a>
        </div>
      </section>
      <section className={footercss.bottom}>
        <span>
          <a href='/'>Conditions of Use &amp; Sale</a>
        </span>
        <span>
          <a href='/'>Privacy Notice</a>
        </span>
        <span>
          <a href='/'>Interest-Based Ads</a>
        </span>
        <span>&copy; 1996-2021, AmazonClone.com, Inc. or its affiliates</span>
      </section>
    </footer>
  );
};

export default Footer;
