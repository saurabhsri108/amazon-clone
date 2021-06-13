import React, { useEffect, useState } from "react";
import ShoppingCarts from "../components/ShoppingCarts";
import { useStateValue } from "../components/StateProvider";
import { subtotal, totalItems } from "../components/Reducer";
import { Link, useHistory } from "react-router-dom";
import paymentcss from "../css/Payment.module.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import NumberFormat from "react-number-format";
import axios from "../axios";
import { db } from "../firebase";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payment/create?total=${subtotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const submitPaymentHandler = async (event) => {
    event.preventDefault();

    // do all the fancy stripe stuff...
    setProcessing(true);

    // get the client secret
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        dispatch({ type: "EMPTY_BASKET" });

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        history.replace("/orders");
      });
  };

  const cardChangeHandler = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    console.log(event);
    setDisabled(!event.complete);
    setError(event.error ? event.error.message : "");
  };

  return (
    <section className={paymentcss.payment}>
      <h1>
        Checkout <Link to="/checkout">({totalItems(basket) + " items"})</Link>
      </h1>
      <div className={paymentcss.content}>
        <div className={paymentcss.content__section}>
          <h4>Deliver to {user?.displayName || user?.email || "Guest"}</h4>
          <div className={paymentcss.payment_address}>
            631/E-456 Fake Street India 400020
          </div>
        </div>
        <div className={paymentcss.content__section}>
          <h4>Review Items</h4>
          <div className={paymentcss.payment_items}>
            {totalItems(basket) !== 0 && (
              <ShoppingCarts
                showSubtotal={true}
                basket={basket}
                paymentPage={true}
              />
            )}
          </div>
        </div>
        <div className={paymentcss.content__section}>
          <h4>Payment Section</h4>
          <div className={paymentcss.payment_items}>
            <form onSubmit={submitPaymentHandler}>
              <CardElement onChange={cardChangeHandler} />
              <h5>
                Order total:{" "}
                <NumberFormat
                  decimalScale={2}
                  value={subtotal(basket)}
                  thousandsGroupStyle={"lakh"}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={`₹ `}
                  fixedDecimalScale={true}
                />
              </h5>
              <button disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
              </button>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
