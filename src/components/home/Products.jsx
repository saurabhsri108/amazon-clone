import React from 'react';
import Product from './Product';
import productcss from '../../css/home/Product.module.css';

const Products = () => {
  return (
    <section className={productcss.products}>
      <div className={productcss.product_row}>
        <Product
          name='ASUS ROG Zephyrus G14 (2021), 14" (35.56 cms) FHD 144Hz, Ryzen 7 5800HS, RTX 3060 6GB Graphics, Gaming Laptop (16GB/1TB SSD/Office 2019/Windows 10/Moonlight White/AniMe Matrix/1.7 Kg), GA401QM-HZ146TS'
          currency='₹'
          amount='1,41,990.00'
          ratings={3}
          image='https://m.media-amazon.com/images/I/81Nwu5Hp0jS._AC_SX615_SY462_.jpg'
          buttonText='Add to Cart'
        />
        <Product
          name='ASUS ROG Zephyrus G14 (2021), 14" (35.56 cms) FHD 144Hz, Ryzen 7 5800HS, GTX 1650 4GB Graphics, Gaming Laptop (8GB/512GB SSD/Office 2019/Windows 10/Moonlight White/AniMe Matrix/1.6 Kg), GA401QH-BM070TS'
          currency='₹'
          amount='94,990.00'
          ratings={5}
          image='https://m.media-amazon.com/images/I/81Nwu5Hp0jS._AC_SX615_SY462_.jpg'
          buttonText='Add to Cart'
        />
        <Product
          name='ASUS ROG Zephyrus G14 (2021), 14" (35.56 cms) FHD 144Hz, Ryzen 9 5900HS, RTX 3060 6GB Graphics, Gaming Laptop (16GB/1TB SSD/Office 2019/Windows 10/Moonlight White/AniMe Matrix/1.7 Kg), GA401QM-HZ269TS'
          currency='₹'
          amount='1,50,990.00'
          ratings={4}
          image='https://m.media-amazon.com/images/I/81Nwu5Hp0jS._AC_SX615_SY462_.jpg'
          buttonText='Add to Cart'
        />
        <Product
          name='ASUS ROG Zephyrus G14 (2021), 14" (35.56 cms) FHD 144Hz, Ryzen 7 5800HS, RTX 3060 6GB Graphics, Gaming Laptop (16GB/1TB SSD/Office 2019/Windows 10/Eclipse Gray/Anime Matrix/1.7 Kg), GA401QM-HZ022TS'
          currency='₹'
          amount='1,39,990.00'
          ratings={5}
          image='https://m.media-amazon.com/images/I/81Nwu5Hp0jS._AC_SX615_SY462_.jpg'
          buttonText='Add to Cart'
        />
      </div>
      <div className={productcss.product_row}>
        <Product
          name='ASUS ROG Zephyrus G14 (2021), 14" (35.56 cms) FHD 144Hz, Ryzen 7 5800HS, RTX 3060 6GB Graphics, Gaming Laptop (16GB/1TB SSD/Office 2019/Windows 10/Eclipse Gray/AniMe Matrix/1.7 Kg), GA401QM-HZ146TS'
          currency='₹'
          amount='1,41,990.00'
          ratings={3}
          image='https://m.media-amazon.com/images/I/81rOuSWZtvL._AC_SX615_SY462_.jpg'
          buttonText='Add to Cart'
        />
        <Product
          name='ASUS ROG Zephyrus G14 (2021), 14" (35.56 cms) FHD 144Hz, Ryzen 7 5800HS, GTX 1650 4GB Graphics, Gaming Laptop (8GB/512GB SSD/Office 2019/Windows 10/Eclipse Gray/AniMe Matrix/1.6 Kg), GA401QH-BM070TS'
          currency='₹'
          amount='94,990.00'
          ratings={5}
          image='https://m.media-amazon.com/images/I/81rOuSWZtvL._AC_SX615_SY462_.jpg'
          buttonText='Add to Cart'
        />
        <Product
          name='ASUS ROG Zephyrus G14 (2021), 14" (35.56 cms) FHD 144Hz, Ryzen 9 5900HS, RTX 3060 6GB Graphics, Gaming Laptop (16GB/1TB SSD/Office 2019/Windows 10/Eclipse Gray/AniMe Matrix/1.7 Kg), GA401QM-HZ269TS'
          currency='₹'
          amount='1,50,990.00'
          ratings={4}
          image='https://m.media-amazon.com/images/I/81rOuSWZtvL._AC_SX615_SY462_.jpg'
          buttonText='Add to Cart'
        />
      </div>
      <div className={productcss.product_row}>
        <Product
          name='ASUS ROG Zephyrus G14 (2021), 14" (35.56 cms) FHD, Ryzen 7 5800HS, GTX 1650 4GB Graphics, Gaming Laptop (8GB/512GB SSD/Office 2019/Windows 10/Moonlight White/1.6 Kg), GA401QH-BM070TS'
          currency='₹'
          amount='94,990.00'
          ratings={4}
          image='https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/c/AmazonStores/A21TJRUUN4KGV/ff46dc4deef9d3d326adefe6ff5e86f9.w3000.h600._CR0%2C0%2C3000%2C600_SX1920_.jpg'
          buttonText='Go to Asus Store'
        />
      </div>
    </section>
  );
};

export default Products;
