import React, { useContext } from "react";
import { StoreContext } from "../Context/Cart";
// import StoreProvider from '../Context/Cart'
const Cart = () => {
  const { cart,RemoveCart } = useContext(StoreContext);
  return (
    <div>
      <h2>My Cart ({cart.length})</h2>
      {(cart || [])?.map((item, index) => (
        <div key={index}>
          {item.name} - ${item.price}
          <button onClick={()=>RemoveCart(item.id)}>Remove from Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
