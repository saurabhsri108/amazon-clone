import moment from "moment";
import React from "react";
import ordercss from "../css/Orders.module.css";
import ShoppingCarts from "./ShoppingCarts";

const Order = ({ order }) => {
  console.log(order);
  return (
    <div className={ordercss.order_items}>
      <div className={ordercss.order_items_details}>
        <h4>
          Order ID: <span>{order.id}</span>
        </h4>
        <p className={ordercss.date}>
          {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
        </p>
      </div>
      <ShoppingCarts
        showSubtotal={true}
        basket={order.data.basket}
        paymentPage={true}
        orderPage={true}
      />
    </div>
  );
};

export default Order;
