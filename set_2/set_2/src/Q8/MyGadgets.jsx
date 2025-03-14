/*
Build a React component called MyGadgets that receives an array of products as a prop.
Render each product's name, description, and price as an ordered list. Create a button below all
the listings which says “Highlight Expensive Gadget” and on click of the button add a lightgreen
backgroundColor to the items which has a price more than 50000.

const products = [
 {
 id: 1,
 name: 'keyboard',
 description: 'Logitech Mechanical Keyboard',
 price: 2000,
 },
 { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
 {
 id: 3,
 name: 'speakers',
 description: 'Bose L1 Pro32 Portable',
 price: 256000,
 },
 { id: 4, name: 'mobile', description: 'iPhone 13', price: 61000 },
 {
 id: 5,
 name: 'monitor',
 description: 'Lenovo 32-inch display Monitor',
 price: 10000,
 },
 { id: 6, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
 {
 id: 7,
 name: 'speakers',
 description: 'Creative Desktop Speakers',
 price: 5000,
 },
 {
 id: 8,
 name: 'headphones',
 description: 'Sony over-the-ear wired Headphones with mic',
 price: 1500,
 },
 { id: 9, name: 'mobile', description: 'iPhone 12', price: 90000 },
]
*/

import { useState } from "react";

function MyGadgets({ products }) {
  const [highlighted, setHighlighted] = useState({});

  function handleBackground() {
    const newHighlights = {};
    products.forEach((product) => {
      if (product.price > 50000) {
        newHighlights[product.id] = true;
      }
    });
    setHighlighted(newHighlights);
  }

  return (
    <div>
      <ol>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              backgroundColor: highlighted[product.id] ? "lightgreen" : "transparent",
              padding: "5px",
              margin: "5px 0",
            }}
          >
            <strong>{product.name}</strong>: {product.description} - ₹{product.price}
          </li>
        ))}
      </ol>
      <button onClick={handleBackground}>Highlight Expensive Gadget</button>
    </div>
  );
}

export default MyGadgets;
