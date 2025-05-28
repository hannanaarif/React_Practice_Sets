import React, { createContext, useState } from 'react';

export const Cartcontext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Cartcontext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </Cartcontext.Provider>
  );
};

export default CartProvider;
