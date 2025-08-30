import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart({ cartItems, increaseQty, decreaseQty, removeItem }) {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} className="cart-img" />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                  <p className="subtotal">Subtotal: ₹{item.price * item.qty}</p>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <h3 className="total">Total: ₹{total}</h3>
          <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart; // ✅ default export
