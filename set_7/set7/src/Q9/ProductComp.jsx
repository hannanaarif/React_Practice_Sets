/*
Create a React component that uses the useEffect hook to fetch the product data from the API
endpoint using the fakeFetch function provided below. The component should use
the useState hook to store the fetched data and a second state variable to store the sorted data.
The sorted data should be sorted in descending order by rating.

10.Adding on to the previous question, Add a search bar to the component that allows users to filter
the products by name. The search bar should update the list of displayed products in real-time
as the user types. The search functionality should be case-insensitive
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
              { name: "Color Pencils", price: 50, quantity: 40, rating: 4.5 },
              { name: "Sketchpens", price: 110, quantity: 20, rating: 3.8 },
              { name: "Eraser", price: 20, quantity: 20, rating: 4.2 },
              { name: "Sharpener", price: 22, quantity: 30, rating: 4.7 },
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
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fakeFetch("https://example.com/api/products").then((resp) => {
      setProduct(resp.data.products);
    });
  }, []);

  const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);

  // Filter products based on search term (case-insensitive)
  const filteredProducts = sortedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h2>Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          borderRadius: "20px",
          border: "1px solid #ccc",
          boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
          outline: "none",
          transition: "all 0.3s ease-in-out",
        }}
        onFocus={(e) => (e.target.style.border = "1px solid #007bff")}
        onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
      />

      {filteredProducts.map((product, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            borderRadius: "8px",
            boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
            width: "200px",
          }}
        >
          <h3>{product.name}</h3>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <p>
            <strong>Quantity:</strong> {product.quantity}
          </p>
          <p>
            <strong>Rating:</strong> {product.rating}
          </p>
        </div>
      ))}
    </>
  );
}
export default Product;
