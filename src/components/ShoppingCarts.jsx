import React from 'react';
import cartcss from '../css/Cart.module.css';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

const ShoppingCarts = ({ showSubtotal }) => {
  return (
    <>
      <p className={cartcss.prices}>Prices</p>
      <div className={cartcss.item_list}>
        <div className={cartcss.item_list_img}>
          <Link to='/'>
            <img
              src='https://m.media-amazon.com/images/I/719ZywAmvOL._AC_AA180_.jpg'
              alt=''
            />
          </Link>
        </div>
        <div className={cartcss.item_list_content}>
          <div className={cartcss.item_list_content_details}>
            <Link to='/'>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
                voluptatibus?
              </h3>
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
              value={2499}
              thousandsGroupStyle={'lakh'}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'₹ '}
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
              value={2499}
              thousandsGroupStyle={'lakh'}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'₹ '}
              fixedDecimalScale={true}
            />
          </strong>
        </p>
      )}
    </>
  );
};

export default ShoppingCarts;
