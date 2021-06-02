import React from 'react';
import productcss from '../css/Product.module.css';
import AsusProducts from './AsusProducts';
import AcerProducts from './AcerProducts';
import HPProducts from './HPProducts';
import AppleProducts from './AppleProducts';

const Products = ({storePoint}) => {
  return (
      <section className={productcss.products}>
        {storePoint === 'asus' && <AsusProducts/>}
        {storePoint === 'acer' && <AcerProducts/>}
        {storePoint === 'hp' && <HPProducts/>}
        {storePoint === 'apple' && <AppleProducts/>}
      </section>
  );
};

export default Products;
