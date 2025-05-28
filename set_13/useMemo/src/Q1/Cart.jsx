import React, { useMemo, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', price: 10, quantity: 2 },
    { id: 2, name: 'Item 2', price: 20, quantity: 1 },
    { id: 3, name: 'Item 3', price: 15, quantity: 3 },
  ]);

  const totalPrice = useMemo(() => {
    console.log('Calculating total price...');
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }, [cartItems]);

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ₹{item.price} × {item.quantity}
          </li>
        ))}
      </ul>
        <button onClick={() => setCartItems([])}>Clear Cart</button>
        {setCartItems.length === 0 && <p>Your cart is empty.</p>}
        <button onClick={() => setCartItems([...cartItems, { id: 4, name: 'Item 4', price: 30, quantity: 1 }])}>Add Item</button>
      <h3>Cart Total</h3>
      <h3>Total Price: ₹{totalPrice}</h3>
    </div>
  );
};

export default Cart;
