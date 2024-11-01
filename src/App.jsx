import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from "./pages/Cart";

function App() {
    return (
        <Router>
                <Route path="/" component={Home} exact />
                <Route path="/product-details" component={ProductDetails} exact />
                <Route path="/cart" component={Cart} exact />
            
        </Router>
    );
}

export default App;
