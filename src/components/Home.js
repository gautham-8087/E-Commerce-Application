import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // create this file

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to <span>ShopEase</span></h1>
        <p>Your one-stop shop for amazing products!</p>
        <Link to="/products">
          <button className="shop-btn">Shop Now</button>
        </Link>
      </section>

      <section className="features">
        <div className="feature">
          <h3>🚚 Fast Delivery</h3>
          <p>Get your products delivered within 2-3 days.</p>
        </div>
        <div className="feature">
          <h3>💳 Secure Payment</h3>
          <p>Multiple payment options for your convenience.</p>
        </div>
        <div className="feature">
          <h3>⭐ Top Quality</h3>
          <p>We provide only the best quality products.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
