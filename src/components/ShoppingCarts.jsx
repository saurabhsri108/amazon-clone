import React from "react";
import cartcss from "../css/Cart.module.css";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import { useStateValue } from "./StateProvider";
import { v4 as uuidv4 } from "uuid";
import { subtotal, totalItems } from "./Reducer";

const ShoppingCarts = ({ showSubtotal, basket, paymentPage, orderPage }) => {
  const [, dispatch] = useStateValue();

  const refundHandler = (basketId) => {
    return;
  };

  const deleteFromCartHandler = (basketId) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: basketId,
    });
  };

  const deleteFromSavedCartHandler = (basketId) => {
    dispatch({
      type: "REMOVE_FROM_SAVED_BASKET",
      id: basketId,
    });
  };

  const saveForLaterHandler = (basket) => {
    deleteFromCartHandler(basket.id);

    dispatch({
      type: "SAVE_FOR_LATER",
      newBasket: basket,
    });
  };

  const moveToCartHandler = (basket) => {
    deleteFromSavedCartHandler(basket.id);

    dispatch({
      type: "MOVE_TO_CART",
      newBasket: basket,
    });
  };

  const cartQuantityHandler = (e) => {
    e.preventDefault();
    // const quantity = parseInt(e.target.value);
    // Handle change quantity feature in future
  };

  return (
    <>
      <p
        className={`${cartcss.prices} ${paymentPage ? cartcss.pay_prices : ""}`}
      >
        Prices
      </p>
      {basket.map((singleBasket) => {
        return (
          <div key={uuidv4()}>
            <div
              className={`${cartcss.item_list} ${
                paymentPage ? cartcss.pay_item_list : ""
              }`}
            >
              <div className={cartcss.item_list_img}>
                <Link to="/products/single-product">
                  <img src={singleBasket.image} alt="Product" />
                </Link>
              </div>
              <div className={cartcss.item_list_content}>
                <div className={cartcss.item_list_content_details}>
                  <Link to="/products/single-product">
                    <h3>{singleBasket.name}</h3>
                  </Link>
                  <p>
                    <small className={cartcss.stock_status}>In Stock</small>
                  </p>
                  {/* <p>
                    <small className={cartcss.subtotal_gift}>
                      <input type='checkbox' /> This order contains a gift
                    </small>
                  </p> */}
                  <div className={cartcss.item_buttons}>
                    {showSubtotal && !paymentPage && !orderPage && (
                      <select
                        name="quantity"
                        id="quantity"
                        onChange={cartQuantityHandler}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    )}
                    {showSubtotal && paymentPage && !orderPage && (
                      <>
                        <button
                          onClick={() => deleteFromCartHandler(singleBasket.id)}
                          style={{ marginLeft: 0 }}
                        >
                          Remove From Basket
                        </button>
                      </>
                    )}
                    {orderPage && (
                      <>
                        <button
                          onClick={() => refundHandler(singleBasket.id)}
                          style={{ marginLeft: 0 }}
                        >
                          Refund
                        </button>
                      </>
                    )}
                    {showSubtotal && !paymentPage && !orderPage && (
                      <>
                        <button
                          onClick={() => deleteFromCartHandler(singleBasket.id)}
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => saveForLaterHandler(singleBasket)}
                        >
                          Save for later
                        </button>
                      </>
                    )}
                    {!showSubtotal && !paymentPage && (
                      <>
                        <button
                          onClick={() =>
                            deleteFromSavedCartHandler(singleBasket.id)
                          }
                        >
                          Delete
                        </button>
                        <button onClick={() => moveToCartHandler(singleBasket)}>
                          Move to Cart
                        </button>
                      </>
                    )}
                  </div>
                </div>
                <div className={cartcss.item_list_content_prices}>
                  <NumberFormat
                    decimalScale={2}
                    value={singleBasket.amount}
                    thousandsGroupStyle={"lakh"}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={`${singleBasket.currency} `}
                    fixedDecimalScale={true}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {showSubtotal && (
        <p className={cartcss.prices}>
          {paymentPage ? "Order Total" : "Subtotal"} ({totalItems(basket)}{" "}
          items):{" "}
          <strong>
            <NumberFormat
              decimalScale={2}
              value={subtotal(basket)}
              thousandsGroupStyle={"lakh"}
              displayType={"text"}
              thousandSeparator={true}
              prefix={`₹ `}
              fixedDecimalScale={true}
            />
          </strong>
        </p>
      )}
    </>
  );
};

export default ShoppingCarts;
