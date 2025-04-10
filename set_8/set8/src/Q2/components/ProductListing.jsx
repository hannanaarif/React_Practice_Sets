import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/products") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            products: [
              {
                id: 1,
                name: "Apple iPhone 13 Pro Max",
                description:
                  "6.7-inch Super Retina XDR display with ProMotion. Ceramic Shield front",
                price: 1099,
                quantity: 10,
                category: "Smartphones",
                brand: "Apple",
              },
              {
                id: 2,
                name: "Samsung Galaxy S21 Ultra",
                description:
                  "6.8-inch Dynamic AMOLED 2X display. Gorilla Glass Victus front and bac",
                price: 1199,
                quantity: 8,
                category: "Smartphones",
                brand: "Samsung",
              },
              {
                id: 3,
                name: "Apple MacBook Air",
                description:
                  "13.3-inch Retina display with True Tone. M1 chip. 8-core CPU. 7-core G",
                price: 999,
                quantity: 5,
                category: "Laptops",
                brand: "Apple",
              },
              // and so on...
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

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fakeFetch("https://example.com/api/products").then((resp) => {
      setProducts(resp.data.products);
    });
  }, []);

  function handleProductClick(){
      
  }

  return (
    <>
      {products.map((product, id) => (
        <ul key={id}>
          <span>{product.id} - <strong>{product.name}</strong></span>
          <p>Description: {product.description}</p>
          <p>Price: {"$"}{product.price}</p>
          <Link to={`/product/${product.id}`}>Visit page</Link>
          <button onClick={handleProductClick}>Add to Cart</button>
        </ul>
      ))}
    </>
  );
};

export default ProductListing;
