import React from 'react';
import productcss from '../css/Product.module.css';
import AsusProducts from './AsusProducts';
import AcerProducts from './AcerProducts';
import GrocProducts from './GrocProducts';

const Products = ({ storepoint }) => {
  return (
    <section className={productcss.products}>
      {storepoint === 'asus' && <AsusProducts />}
      {storepoint === 'acer' && <AcerProducts />}
      {storepoint === 'groceries' && <GrocProducts />}
    </section>
  );
};

export default Products;
