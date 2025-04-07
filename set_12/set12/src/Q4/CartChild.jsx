import React, { useContext, useEffect, useState } from "react";
import { CartTotalContext } from "./Cart";

const CartChild = () => {
  const { items } = useContext(CartTotalContext);
  const [price, setPrice] = useState(0);
  const [cartItem, setcartItem] = useState([]);

  useEffect(() => {
    handlePrice();
  }, [cartItem]);

  function handlePrice() {
    if (cartItem.length == 0) {
      setPrice(0);
      return;
    }
    const total = cartItem.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setPrice(total);
  }

  function handleCart(item) {
    setcartItem((prev) => {
      const existing = prev.find((c) => c.name === item.name);

      if (existing) {
        return prev.map((c) =>
          c.name === item.name ? { ...c, quantity: c.quantity + 1 } : c
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
    console.log(cartItem);
  }

  function handleRemove(item) {
    setcartItem((prev) => {
      const existing = prev.find((c) => c.name === item.name);
      if (existing) {
          if(existing.quantity===1){
            return prev.filter((p)=>p.name!==item.name)
          }
          else{
            return prev.map((p)=>{
            return  p.name===item.name?{...p,quantity:p.quantity-1}:p
            })
          }
          }
          return prev
      });
  }
  

  return (
    <div>
      <h2>Cart Total ${price}</h2>
      {cartItem.length === 0 ? (
        <p>No item in Cart</p>
      ) : (
        cartItem.map((cart, id) => (
          <div key={id}>
            <h4>
              {cart.name} ${cart.price} (Quantity:{cart.quantity})
              <button onClick={() => handleRemove(cart)}>remove item</button>
            </h4>
          </div>
        ))
      )}

      <h2>Available items</h2>

      {items.map((item, id) => (
        <div key={item.id}>
          <p key={id}>
            {item.name} {"$"}
            {item.price}
            <button onClick={() => handleCart(item)}>Add to cart</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default CartChild;
