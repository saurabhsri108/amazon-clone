import React from 'react';
import cartcss from '../css/Cart.module.css';

const Cart = () => {
  return (
    <section className={cartcss.cart_section}>
      <h1 className={cartcss.main_heading}>Your Cart</h1>
    </section>
  );
};

export default Cart;
