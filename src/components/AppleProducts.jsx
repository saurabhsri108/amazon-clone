import React from 'react';
import Product from './Product';
import productcss from '../css/Product.module.css';

const AppleProducts = () => {
  return (
      <>
        <h1 className={productcss.main_heading}>Apple Laptops</h1>
        <div className={productcss.product_row}>
          <Product
              name='APPLE ROG Zephyrus G14 (2021), 14" (35.56 cms) FHD 144Hz, Ryzen 7 5800HS, RTX 3060 6GB Graphics, Gaming Laptop (16GB/1TB SSD/Office 2019/Windows 10/Moonlight White/AniMe Matrix/1.7 Kg), GA401QM-HZ146TS'
              currency="₹"
              amount="1,41,990.00"
              ratings={3}
              image="https://m.media-amazon.com/images/I/81Nwu5Hp0jS._AC_SX615_SY462_.jpg"
              buttonText="Add to Cart"
          />
          <Product
              name='APPLE ROG Zephyrus G14 (2021), 14" (35.56 cms) FHD 144Hz, Ryzen 7 5800HS, GTX 1650 4GB Graphics, Gaming Laptop (8GB/512GB SSD/Office 2019/Windows 10/Moonlight White/AniMe Matrix/1.6 Kg), GA401QH-BM070TS'
              currency="₹"
              amount="94,990.00"
              ratings={5}
              image="https://m.media-amazon.com/images/I/81Nwu5Hp0jS._AC_SX615_SY462_.jpg"
              buttonText="Add to Cart"
          />
          <Product
              name='APPLE ROG Zephyrus G14 (2021), 14" (35.56 cms) FHD 144Hz, Ryzen 9 5900HS, RTX 3060 6GB Graphics, Gaming Laptop (16GB/1TB SSD/Office 2019/Windows 10/Moonlight White/AniMe Matrix/1.7 Kg), GA401QM-HZ269TS'
              currency="₹"
              amount="1,50,990.00"
              ratings={4}
              image="https://m.media-amazon.com/images/I/81Nwu5Hp0jS._AC_SX615_SY462_.jpg"
              buttonText="Add to Cart"
          />
        </div>
        <div className={productcss.product_row}>
          <Product
              name='APPLE ROG Zephyrus G14 (2021), 14" (35.56 cms) FHD 144Hz, Ryzen 7 5800HS, RTX 3060 6GB Graphics, Gaming Laptop (16GB/1TB SSD/Office 2019/Windows 10/Eclipse Gray/AniMe Matrix/1.7 Kg), GA401QM-HZ146TS'
              currency="₹"
              amount="1,41,990.00"
              ratings={3}
              image="https://m.media-amazon.com/images/I/81rOuSWZtvL._AC_SX615_SY462_.jpg"
              buttonText="Add to Cart"
          />
          <Product
              name='APPLE ROG Zephyrus G14 (2021), 14" (35.56 cms) FHD 144Hz, Ryzen 7 5800HS, GTX 1650 4GB Graphics, Gaming Laptop (8GB/512GB SSD/Office 2019/Windows 10/Eclipse Gray/AniMe Matrix/1.6 Kg), GA401QH-BM070TS'
              currency="₹"
              amount="94,990.00"
              ratings={5}
              image="https://m.media-amazon.com/images/I/81rOuSWZtvL._AC_SX615_SY462_.jpg"
              buttonText="Add to Cart"
          />
          <Product
              name='APPLE ROG Zephyrus G14 (2021), 14" (35.56 cms) FHD 144Hz, Ryzen 9 5900HS, RTX 3060 6GB Graphics, Gaming Laptop (16GB/1TB SSD/Office 2019/Windows 10/Eclipse Gray/AniMe Matrix/1.7 Kg), GA401QM-HZ269TS'
              currency="₹"
              amount="1,50,990.00"
              ratings={4}
              image="https://m.media-amazon.com/images/I/81rOuSWZtvL._AC_SX615_SY462_.jpg"
              buttonText="Add to Cart"
          />
        </div>
      </>
  );
};

export default AppleProducts;
