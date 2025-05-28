import React, { useContext } from "react";
import { StoreContext } from "../Context/Cart";

const Wishlist = () => {
  const { wishlist, RemoveWishlist } = useContext(StoreContext);
  return (
    <div>
      <h2>My Wishlist ({wishlist.length})</h2>
      {wishlist.map((item, index) => (
        <div key={index}>
          {item.name} - ${item.price}
          <button onClick={() => RemoveWishlist(item.id)}>Remove from Wishlist</button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
