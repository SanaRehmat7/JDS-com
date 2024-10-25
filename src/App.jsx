import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ProductDeatils from "./pages/ProductDetails";
import Cart from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/product-details" element={<ProductDeatils />} exact />
      <Route path="/Cart" element={<Cart />} exact />
    </Routes>
  );
}

export default App;