import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/HomePage/HomePage";
import Cart from "../components/Cart/Cart";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Product from "../components/Product/Product";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ProductCard from "../components/Product/ProductCard";
import Checkout from "../components/Checkout/Checkout";
import DeliveryAddressForm from "../components/Checkout/DeliveryAddressForm";
import Order from "../components/Order/Order";
import OrderDetails from "../components/Order/OrderDetails";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
      <Navigation/>
      </div>

    
      
      
    {/* <Order/> */}
    {/* <OrderDetails/> */}

      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/:lavelOne/:lavelTwo/:lavelThre' element={<Product/>}></Route>
        <Route path='/product' element={<ProductDetails/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/account/order" element={<Order/>}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails/>}></Route>
      
      </Routes>
    
      <div>
     <Footer/>
     </div>
      
    </div>
  );
};

export default CustomerRoutes;
