/*
Adding on to the previous question, There should be three buttons for this purpose: "Low to
High", "High to Low", and "Reset". When the user clicks on "Low to High", the products should
be sorted by price in ascending order. When the user clicks on "High to Low", the products
should be sorted by price in descending order. When the user clicks on "Reset", the products
should be displayed in their original order.
*/

import { useEffect, useState } from "react";

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/products") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            products: [
              {
                name: "Product 1",
                description: "This is the first product",
                price: 25.99,
                quantity: 10,
              },
              {
                name: "Product 2",
                description: "This is the second product",
                price: 19.99,
                quantity: 15,
              },
              {
                name: "Product 3",
                description: "This is the third product",
                price: 35.5,
                quantity: 5,
              },
              {
                name: "Product 4",
                description: "This is the fourth product",
                price: 49.99,
                quantity: 20,
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Product list not found.",
        });
      }
    }, 2000);
  });
};

function Product() {
  const [products, setProduct] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);

  useEffect(() => {
    fakeFetch("https://example.com/api/products").then((resp) => {
      setProduct(resp.data.products);
      setOriginalProducts(resp.data.products);
    });
  }, []);

  const filterByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProduct(sortedProducts);
  };

  const filterLowtoHigh = () => {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setProduct(sortedProducts);
  };

  const filterByQuantity = () => {
    const sortedProducts = [...products].sort(
      (a, b) => a.quantity - b.quantity
    );
    setProduct(sortedProducts);
  };

  const Reset = () => {
    setProduct(originalProducts);
  };

  return (
    <>
      <button onClick={filterByPrice}>Low to High Price</button>
      <button onClick={filterLowtoHigh}>High to Low Price</button>
      <button onClick={filterByQuantity}>Sort By Quantity</button>
      <button onClick={Reset}>Reset</button>

      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <h2>{product.name}</h2>
            <ul>
              <li>
                <strong>Description:</strong> {product.description}
              </li>
              <li>
                <strong>Price:</strong> ${product.price}
              </li>
              <li>
                <strong>Quantity:</strong> {product.quantity}
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Product;
