import React from 'react';
import productcss from '../css/Product.module.css';
import AsusProducts from '../pages/AsusProducts';
import AcerProducts from '../pages/AcerProducts';
import GrocProducts from '../pages/GrocProducts';

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
