import React from "react";
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from "./pages/Home";
import ProductDeatils from "./pages/ProductDetails";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} exact/>
      <Route path="/product-details" component={ProductDeatils} exact/>
      <Route path="/Cart" component={Cart} exact/>
    </Router>
  
  );
}

export default App;