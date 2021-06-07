import React from 'react';
import cartcss from '../css/Cart.module.css';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import { useStateValue } from './StateProvider';

const ShoppingCarts = ({ showSubtotal }) => {
  const [{ basket }] = useStateValue();
  return (
    <>
      <p className={cartcss.prices}>Prices</p>
      {basket.map((singleBasket) => {
        return (
          <>
            <div className={cartcss.item_list}>
              <div className={cartcss.item_list_img}>
                <Link to='/products/single-product'>
                  <img src={singleBasket.image} alt='Product Image' />
                </Link>
              </div>
              <div className={cartcss.item_list_content}>
                <div className={cartcss.item_list_content_details}>
                  <Link to='/products/single-product'>
                    <h3>{singleBasket.name}</h3>
                  </Link>
                  <p>
                    <small className={cartcss.stock_status}>In Stock</small>
                  </p>
                  <p>
                    <small className={cartcss.subtotal_gift}>
                      <input type='checkbox' /> This order contains a gift
                    </small>
                  </p>
                  <div className={cartcss.item_buttons}>
                    {showSubtotal && (
                      <select name='quantity' id='quantity'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                      </select>
                    )}
                    <button>Delete</button>
                    {showSubtotal && <button>Save for later</button>}
                    {!showSubtotal && <button>Move to Cart</button>}
                  </div>
                </div>
                <div className={cartcss.item_list_content_prices}>
                  <NumberFormat
                    decimalScale={2}
                    value={singleBasket.amount}
                    thousandsGroupStyle={'lakh'}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={`${singleBasket.currency} `}
                    fixedDecimalScale={true}
                  />
                </div>
              </div>
            </div>
            {showSubtotal && (
              <p className={cartcss.prices}>
                Subtotal (0 items):{' '}
                <strong>
                  <NumberFormat
                    decimalScale={2}
                    value={singleBasket.amount}
                    thousandsGroupStyle={'lakh'}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={`${singleBasket.currency} `}
                    fixedDecimalScale={true}
                  />
                </strong>
              </p>
            )}
          </>
        );
      })}
    </>
  );
};

export default ShoppingCarts;
