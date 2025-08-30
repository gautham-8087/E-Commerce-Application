import React, { useState } from "react";
import "./Checkout.css";

function Checkout({ cartItems, total }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",

  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Order placed successfully!");
    // Here you can also redirect to a success page or clear the cart
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-content">
        {/* Form */}
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h3>Shipping Details</h3>
          <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} required />
          <div className="small-inputs">
            <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange} required />
            <input type="text" name="state" placeholder="State" value={form.state} onChange={handleChange} required />
            <input type="text" name="pin" placeholder="PIN Code" value={form.zip} onChange={handleChange} required />
          </div>
          <button type="submit" className="place-order-btn">Place Order</button>
        </form>

        {/* Order Summary */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id} className="order-item">
                    <img src={item.img} alt={item.name} />
                    <div className="item-info">
                      <p>{item.name}</p>
                      <p>Qty: {item.qty}</p>
                      <p>₹{item.price * item.qty}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <h4>Total: ₹{total}</h4>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
