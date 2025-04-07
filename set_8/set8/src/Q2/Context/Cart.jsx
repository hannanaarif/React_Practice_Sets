import React, { createContext } from 'react'


export const CartContext=createContext();

const Cart = () => {
  return (
    <div>
      <CartContext.Provider value={{}}>

      </CartContext.Provider>
      
    </div>
  )
}

export default Cart
