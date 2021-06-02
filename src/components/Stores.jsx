import React from 'react';
import storescss from '../css/Stores.module.css';
import Store from './Store';

const Stores = () => {
  return (
      <section className={storescss.stores}>
        <div className={storescss.store_row}>
          <Store
              name="Asus Store"
              image="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/c/AmazonStores/A21TJRUUN4KGV/ff46dc4deef9d3d326adefe6ff5e86f9.w3000.h600._CR0%2C0%2C3000%2C600_SX1920_.jpg"
              buttonText="Go to Asus Store"
          />
        </div>
        <div className={storescss.store_row}>
          <Store
              name="Apple Store"
              image="https://m.media-amazon.com/images/S/abs-image-upload-na/4/AmazonStores/A21TJRUUN4KGV/cdcc01fd93f3500f6c65cc61567e01f3.w3000.h600._CR0%2C0%2C3000%2C600_SX1920_.jpg"
              buttonText="Go to Apple Store"
          />
          <Store
              name="HP Store"
              image="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/6/AmazonStores/A21TJRUUN4KGV/dabbf57ac4237b2d92e9f97c5fd952ec.w3000.h600._CR0%2C0%2C3000%2C600_SX1920_.jpg"
              buttonText="Go to HP Store"
          />
        </div>
        <div className={storescss.store_row}>
          <Store
              name="Acer Store"
              image="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/a/AmazonStores/A21TJRUUN4KGV/da4140468a6babe661c7f9f5c813635c.w3000.h600._CR0%2C0%2C3000%2C600_SX1920_.jpg"
              buttonText="Go to Acer Store"
          />
        </div>
      </section>
  );
};

export default Stores;
