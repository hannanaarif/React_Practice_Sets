/*
Create an e-commerce App in React with different routes for:
Product listing page - fakeFetch has been provided. Fetch the data and display on the
product listing page.
cart page
wish list page
A 404 page should be displayed when user enters wrong url
*/

import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Cart from "./components/MyCart";
import Wishlist from "./components/MyWishlist";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";

function Listing() {

  return (
    <>
    <Link to="/cart">MyCart</Link>
    <br/>
    <Link to="/wishlist">MyWishlist</Link>
    <br/>
    <Link to="/list">Product List</Link>

     <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/list" element={<ProductListing/>}/>
        <Route path="/product/:productId" element={<ProductDetail/>} />
        <Route path="/*" element={<h2>Page not found</h2>}/>
    </Routes>
    </>
  );
}

export default Listing;
