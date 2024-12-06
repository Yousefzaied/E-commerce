import React from "react";
import Navbar from "../component/navBar";
import Landing from "./landing";
import Services from "./services";
import Discount from "./discount";
import NewProduct from "./newproduct";
import BestSales from "./bestsales";
import Footer from "./footer";
import { Route, Routes } from "react-router";
import Card from "./card";
import ProductDetails from "./productDetails";


const APP = () => {
  return (
    
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element = {<>
        <Landing/>
        <Services/>
        <Discount/>
      <NewProduct/>
      <BestSales/>
        </>}></Route>
        <Route path="card/:productId" element = {<Card/>}></Route>
        <Route path="product/:productId" element={<ProductDetails/>}></Route>
      </Routes>
      <Footer/>
    </div>
    
    );
}
 
export default APP;

