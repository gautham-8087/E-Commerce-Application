import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Cart from "./components/Cart"; 
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import Login from "./components/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  // Add to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  // Quantity management
  const increaseQty = (id) =>
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
    );

  const decreaseQty = (id) =>
    setCartItems((prev) =>
      prev.map((item) => (item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item))
    );

  const removeItem = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <Router>
      {isAuthenticated && <Navbar onLogout={handleLogout} cartCount={cartItems.reduce((acc, item) => acc + item.qty, 0)} />}
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/products" element={isAuthenticated ? <Products addToCart={addToCart} /> : <Navigate to="/login" replace />} />
        <Route
          path="/cart"
          element={
            isAuthenticated ? (
              <Cart
                cartItems={cartItems}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                removeItem={removeItem}
              />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/checkout"
          element={
            isAuthenticated ? (
              <Checkout cartItems={cartItems} total={total} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
      {isAuthenticated && <Footer />}
    </Router>
  );
}

export default App;
