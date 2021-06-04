import React from 'react';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteIcon from '@material-ui/icons/Delete';
import productcss from '../css/Product.module.css';
import { Link } from 'react-router-dom';

const Product = ({ name, currency, amount, ratings, image, buttonText }) => {
  return (
    <section className={productcss.product}>
      <div className={productcss.info}>
        <p className={productcss.heading}>{name}</p>
        <div className={productcss.ratings}>
          {Array(ratings)
            .fill()
            .map((star) => {
              return <StarIcon />;
            })}
        </div>
        <p>
          <span className={productcss.currency}>{currency}</span>
          {/* <span className={productcss.currency}>$</span> */}
          <span className={productcss.amount}>{amount}</span>
        </p>
      </div>
      <div className={productcss.img_container}>
        <img src={image} alt='Product Image' />
      </div>
      <div className={productcss.btnadd}>
        <Button
          variant='contained'
          startIcon={<AddBoxIcon />}
          // startIcon={<DeleteIcon />}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default Product;
