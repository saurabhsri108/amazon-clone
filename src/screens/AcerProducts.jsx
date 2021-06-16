import React from 'react';
import Product from '../components/Product';
import productcss from '../css/Product.module.css';
import { v4 as uuidv4 } from 'uuid';

const AcerProducts = () => {
  return (
    <>
      <h1 className={productcss.main_heading}>Acer Laptops</h1>
      <div className={productcss.product_row}>
        <Product
          key={uuidv4()}
          id={uuidv4()}
          name='Acer Nitro 5 Intel Core i5-10th Gen 15.6-inch (39.62 cms) Display T&L Gaming Laptop (8GB Ram/1TB HDD + 256GB SSD/Win10/GTX 1650Ti Graphics/Obsidian Black/2.3 Kgs), AN515-55 + Xbox Game Pass for PC'
          currency='₹'
          amount='64,990.00'
          ratings={5}
          image='https://images-na.ssl-images-amazon.com/images/I/81mxlt2J81L._SL1500_.jpg'
          buttonText='Add to Cart'
        />
        <Product
          key={uuidv4()}
          id={uuidv4()}
          name='Acer Nitro 5 Intel Core i7 10750H 15.6" FHD IPS 144Hz Display Thin and Light Gaming Laptop (8GB Ram/1TB HDD + 256 GB SSD/Windows 10 Home /GTX 1650Ti Graphics/Obisidian Black/2.3 kgs),AN515-55'
          currency='₹'
          amount='99,900.00'
          ratings={5}
          image='https://images-na.ssl-images-amazon.com/images/I/71Pp8PLPNAL._SL1500_.jpg'
          buttonText='Add to Cart'
        />
        <Product
          key={uuidv4()}
          id={uuidv4()}
          name='Acer Predator Triton Intel i5 10th Gen 15.6" (39.62cms) FHD IPS 144 Hz Display Full Metal Thin & Light Gaming Laptop (8GB RAM/512GB SSD/Win10/GTX 1650Ti Graphics/19.9mm Thin/Abyssal Black), PT315-52'
          currency='₹'
          amount='76,990.00'
          ratings={4}
          image='https://images-na.ssl-images-amazon.com/images/I/81EiTAEiBxL._SL1500_.jpg'
          buttonText='Add to Cart'
        />
        <Product
          key={uuidv4()}
          id={uuidv4()}
          name='Acer Nitro 5 Intel Core i5-11th Generation 144 Hz Refresh Rate 15.6-inch (39.62 cms) Gaming Laptop (8GB Ram/512 GB SSD/Win10/GTX 1650 Graphics/Obsidian Black/2.2 Kgs), AN515-56 + Xbox Game Pass for PC'
          currency='₹'
          amount='69,990.00'
          ratings={5}
          image='https://images-na.ssl-images-amazon.com/images/I/71evs2WKJjS._SL1500_.jpg'
          buttonText='Add to Cart'
        />
      </div>
      <div className={productcss.product_row}>
        <Product
          key={uuidv4()}
          id={uuidv4()}
          name='Acer Aspire 7 Core i5 9th Gen - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650 Ti) A715-75G-51H8 Gaming Laptop (15.6 inch, Charcoal Black, 2.15 kg)'
          currency='₹'
          amount='55,990.00'
          ratings={3}
          image='https://images-na.ssl-images-amazon.com/images/I/418WSiz8uzL.jpg'
          buttonText='Add to Cart'
        />
        <Product
          key={uuidv4()}
          id={uuidv4()}
          name='Acer Nitro 5 Intel Core i5-11th Generation 144 Hz Refresh Rate 15.6-inch (39.62 cms) Gaming Laptop (8GB Ram/512 GB SSD/Win10/GTX 1650 Graphics/Obsidian Black/2.2 Kgs), AN515-56 + Xbox Game Pass for PC'
          currency='₹'
          amount='69,990.00'
          ratings={5}
          image='https://images-na.ssl-images-amazon.com/images/I/71evs2WKJjS._SL1500_.jpg'
          buttonText='Add to Cart'
        />
        <Product
          key={uuidv4()}
          id={uuidv4()}
          name='Acer Predator Triton Intel i5 10th Gen 15.6" (39.62cms) FHD IPS 144 Hz Display Full Metal Thin & Light Gaming Laptop (8GB RAM/512GB SSD/Win10/GTX 1650Ti Graphics/19.9mm Thin/Abyssal Black), PT315-52'
          currency='₹'
          amount='76,990.00'
          ratings={4}
          image='https://images-na.ssl-images-amazon.com/images/I/81EiTAEiBxL._SL1500_.jpg'
          buttonText='Add to Cart'
        />
        <Product
          key={uuidv4()}
          id={uuidv4()}
          name='Acer Nitro 5 Intel Core i5-10th Gen 15.6-inch (39.62 cms) 144 Hz Refresh Rate Gaming Laptop (8GB RAM/RTX 3060 Graphics/1TB HDD + 256GB SSD/Windows 10/Obsidian Black/2.3 Kgs), AN515-55'
          currency='₹'
          amount='89,990.00'
          ratings={4}
          image='https://images-na.ssl-images-amazon.com/images/I/81359Qk1QzL._SL1500_.jpg'
          buttonText='Add to Cart'
        />
      </div>
    </>
  );
};

export default AcerProducts;
