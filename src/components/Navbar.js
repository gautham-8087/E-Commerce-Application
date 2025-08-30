import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cartCount = 0, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();         // Update auth state
    navigate("/login"); // Redirect to login
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">ShopEase</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li>
          <Link to="/cart" className="cart-link">
            🛒 Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </li>
        <li>
          <button className="login-btn" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
