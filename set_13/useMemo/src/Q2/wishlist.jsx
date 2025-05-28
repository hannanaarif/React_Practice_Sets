import React, { useContext, useMemo } from 'react'
import { Cartcontext } from './context/WishlistContext'

const wishlist = () => {
    const { cartItems, setCartItems } = useContext(Cartcontext);
    const totalPrice=useMemo(() => {
        return cartItems.reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0);
      }, [cartItems]);
  return (  
    <div>
        <h1>Wishlist</h1>
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
        <h3>Total Price: ₹{totalPrice}</h3>

      
    </div>
  )
}

export default wishlist
