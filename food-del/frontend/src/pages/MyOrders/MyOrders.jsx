import React, { useState, useEffect } from "react";
import "./myorders.css";

const MyOrders = () => {
  // Retrieve orders from local storage
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("userOrders")) || [];
    setOrders(savedOrders);
  }, []);

  const formatPrice = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };

  return (
    <div className="orders-container">
      <h2>My Orders</h2>
      {orders.length > 0 ? (
        <div className="orders-list">
          {orders.map((order, index) => (
            <div className="order-card" key={index}>
              <img src={order.img} alt={order.name} className="order-img" />
              <div className="order-info">
                <h3>{order.name}</h3>
                <p>Ordered on {order.date}</p>
                <p>Qty: {order.qty}</p>
                <p>{formatPrice(order.price)}</p>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
                <button className="track-btn">Track</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default MyOrders;
