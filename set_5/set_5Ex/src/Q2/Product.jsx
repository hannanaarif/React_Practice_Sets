/*
Create a React component that fetches products data from an API endpoint
using useEffect hook and display products (name, price, quantity) as a list on the screen using
the useState hook.
a. Add a button, on click of which it displays only the items with more than 20 as quantity.

*/

import { useState } from "react";
import { useEffect } from "react";
import Button from "../../../../set_4/set_4-Exercise/src/Q2/Buttons";


const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/products") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            products: [
              { name: "Color Pencils", price: 50, quantity: 40 },
              { name: "Sketchpens", price: 110, quantity: 20 },
              { name: "Erasor", price: 20, quantity: 20 },
              { name: "Sharpner", price: 22, quantity: 30 },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found.",
        });
      }
    }, 2000);
  });
};


function Product(){
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        fakeFetch("https://example.com/api/products").then((product)=>(
            setProduct(product.data.products)
        ))
    },[])

    function handleClick(){
        setProduct(product.filter((product)=>product.quantity>20))
    }
    function handlePrice(){
        setProduct(product.filter((product)=>product.price<100))
    }

    return (<>
        <button onClick={handleClick}>Quantity more than 20</button>
        <button onClick={handlePrice}>Filter by Price</button>
        {product.map((prod)=>(
            <ol key={prod.name}>
                Name: {prod.name},price: {prod.price},quantity: {prod.quantity}
            </ol>
        ))}
    </>)
}
export default Product
