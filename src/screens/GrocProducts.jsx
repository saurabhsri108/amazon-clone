import React from 'react';
import Product from '../components/Product';
import productcss from '../css/Product.module.css';
import { v4 as uuidv4 } from 'uuid';

const GrocProducts = () => {
  return (
    <>
      <h1 className={productcss.main_heading}>Groceries</h1>
      <div className={productcss.product_row}>
        <Product
          key={uuidv4()}
          id={uuidv4()}
          name='Aashirvaad Select Premium Sharbati Atta, 5kg'
          currency='₹'
          amount='239.00'
          ratings={5}
          image='https://images-na.ssl-images-amazon.com/images/I/81l7thl5AQL._SL1500_.jpg'
          buttonText='Add to Cart'
        />
        <Product
          key={uuidv4()}
          id={uuidv4()}
          name='Amazon Brand - Vedaka Premium Toor Dal, 1kg'
          currency='₹'
          amount='132.00'
          ratings={4}
          image='https://images-na.ssl-images-amazon.com/images/I/814RH9YfhUL._SL1500_.jpg'
          buttonText='Add to Cart'
        />
        <Product
          key={uuidv4()}
          id={uuidv4()}
          name='Sunfeast Dark Fantasy Choco Fills, 600g'
          currency='₹'
          amount='160.00'
          ratings={4}
          image='https://images-na.ssl-images-amazon.com/images/I/81nvWgzLWEL._SL1500_.jpg'
          buttonText='Add to Cart'
        />
        <Product
          key={uuidv4()}
          id={uuidv4()}
          name='Aashirvaad Svasti Ghee, 1L'
          currency='₹'
          amount='546.00'
          ratings={3}
          image='https://images-na.ssl-images-amazon.com/images/I/71B5qacE2hS._SL1500_.jpg'
          buttonText='Add to Cart'
        />
      </div>
      <div className={productcss.product_row}>
        <Product
          key={uuidv4()}
          id={uuidv4()}
          name='Amazon Brand - Solimo Premium Almonds, 500g'
          currency='₹'
          amount='458.00'
          ratings={5}
          image='https://images-na.ssl-images-amazon.com/images/I/81-8rQFKVsL._SL1500_.jpg'
          buttonText='Add to Cart'
        />
        <Product
          key={uuidv4()}
          id={uuidv4()}
          name='Aashirvaad Svasti Ghee, 1L'
          currency='₹'
          amount='546.00'
          ratings={3}
          image='https://images-na.ssl-images-amazon.com/images/I/71B5qacE2hS._SL1500_.jpg'
          buttonText='Add to Cart'
        />
        <Product
          key={uuidv4()}
          id={uuidv4()}
          name='Dhara Rice Bran Oil, 5l with Free 1Kg Sugar'
          currency='₹'
          amount='880.00'
          ratings={4}
          image='https://images-na.ssl-images-amazon.com/images/I/61BFNLvQD-S._SL1001_.jpg'
          buttonText='Add to Cart'
        />
        <Product
          key={uuidv4()}
          id={uuidv4()}
          name='Sunfeast Dark Fantasy Choco Fills, 600g'
          currency='₹'
          amount='160.00'
          ratings={4}
          image='https://images-na.ssl-images-amazon.com/images/I/81nvWgzLWEL._SL1500_.jpg'
          buttonText='Add to Cart'
        />
      </div>
    </>
  );
};

export default GrocProducts;
