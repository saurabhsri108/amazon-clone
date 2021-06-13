import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Order from "../components/Order";
import { useStateValue } from "../components/StateProvider";
import ordercss from "../css/Orders.module.css";
import { db } from "../firebase";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <>
      <h1 className={ordercss.h1}>Your Orders</h1>
      <div className={ordercss.orders_list}>
        {orders.map((order) => {
          return <Order key={order.id} order={order} />;
        })}
      </div>
    </>
  );
};

export default Orders;
