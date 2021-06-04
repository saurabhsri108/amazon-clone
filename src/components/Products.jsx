import React from 'react';
import productcss from '../css/Product.module.css';
import AsusProducts from './AsusProducts';
import AcerProducts from './AcerProducts';
import GrocProducts from './GrocProducts';

const Products = ({ storePoint }) => {
  return (
    <section className={productcss.products}>
      {storePoint === 'asus' && <AsusProducts />}
      {storePoint === 'acer' && <AcerProducts />}
      {storePoint === 'groceries' && <GrocProducts />}
    </section>
  );
};

export default Products;
