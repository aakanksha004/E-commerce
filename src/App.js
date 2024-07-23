// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './customer/components/Cart/Cart.jsx';
import Checkout from './customer/components/Checkout/Checkout.jsx';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/navigation/Navigation.jsx';
import Order from './customer/components/Order/Order.jsx';
import OrderDetails from './customer/components/Order/OrderDetails.jsx';
// import { Navigation } from './customer/components/navigation';
import HomePage from './customer/components/pages/HomePage/HomePage';
import Product from './customer/components/Product/Product.jsx';
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx';
import CustomerRoutes from './customer/Routers/CustomerRoutes.jsx';

function App() {
  return (
    <div className="">

      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}></Route>
      </Routes>
    
     
    
    </div>
  );
}

export default App;
