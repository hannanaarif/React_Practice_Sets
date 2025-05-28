import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../Context/Cart';
import { useNavigate } from "react-router-dom";


const ProductListing = () => {
  const { products, addToCart, addToWishlist } = useContext(StoreContext);
  const navigate = useNavigate();

  function handleDetail(id){
    navigate(`/product/${id}`)
  }
 
  return (
    <div>
      <h2>Product Listing</h2>
      {(products).map((product) => (
        <div key={product.id} style={{ border: "1px solid gray", margin: "1rem", padding: "1rem" }}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleDetail(product.id)}>View Details</button>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
        </div>
      ))}
      <Link to="/cart">Go to Cart</Link> | <Link to="/wishlist">Go to Wishlist</Link>
    </div>
  );
};

export default ProductListing;
