/*
Create a React app with CartTotalContext that stores the total price of items in the shopping
cart. Implement a CartSummary component that displays the cart total obtained from
the CartTotalContext using useContext. You can display the available cart items on the same
page along with buttons to add or remove items from cart

*/

import { createContext } from "react";
import CartChild from "./CartChild";

export const CartTotalContext = createContext();

const items = [
  { id: 1, name: "Item 1", price: 10 },
  { id: 2, name: "Item 2", price: 20 },
  { id: 3, name: "Item 3", price: 30 },
];

function Cart() {
  return (
    <>
      <h2>Shopping Cart Summary</h2>

      <CartTotalContext.Provider value={{items}}>
            <CartChild/>
      </CartTotalContext.Provider>
    </>
  );
}
export default Cart;
