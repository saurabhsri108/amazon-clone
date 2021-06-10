import React from 'react';
import storescss from '../css/Stores.module.css';
import Store from './Store';

const Stores = () => {
  return (
    <section className={storescss.stores}>
      <div className={storescss.store_row}>
        <Store
          name='Groceries'
          image='https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPantry/June/SVDHeader/N_SVD_SF_1500x300_Set-1_New.jpg'
          buttonText='Buy Groceries'
        />
      </div>
      <div className={storescss.store_row}>
        <Store
          name='Asus Store'
          image='https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/c/AmazonStores/A21TJRUUN4KGV/ff46dc4deef9d3d326adefe6ff5e86f9.w3000.h600._CR0%2C0%2C3000%2C600_SX1920_.jpg'
          buttonText='Go to Asus Store'
        />
        <Store
          name='Acer Store'
          image='https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/a/AmazonStores/A21TJRUUN4KGV/da4140468a6babe661c7f9f5c813635c.w3000.h600._CR0%2C0%2C3000%2C600_SX1920_.jpg'
          buttonText='Go to Acer Store'
        />
      </div>
      <div className={storescss.store_row}></div>
    </section>
  );
};

export default Stores;
