import React from 'react';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteIcon from '@material-ui/icons/Delete';
import productcss from '../css/Product.module.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { v4 as uuidv4 } from 'uuid';

const Product = ({
  id,
  name,
  currency,
  amount,
  ratings,
  image,
  buttonText,
}) => {
  const [{ basket }, dispatch] = useStateValue();

  const addProductToBasket = () => {
    // Dispatch to basket
    dispatch({
      type: 'ADD_TO_BASKET',
      item: { id, name, currency, amount, ratings, image },
    });
  };

  return (
    <section className={productcss.product}>
      <div className={productcss.info}>
        <p className={productcss.heading}>{name}</p>
        <div className={productcss.ratings}>
          {Array(ratings)
            .fill()
            .map((star) => {
              return <StarIcon key={uuidv4()} />;
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
          onClick={addProductToBasket}
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
