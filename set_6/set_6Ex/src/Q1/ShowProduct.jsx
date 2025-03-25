/*

1. Create a React component that calls the product api and has the same number of buttons as the
items in product. On Click of each button show the details of that card only. Example: In the
below API we have three products and three buttons.



*/

import { useState } from "react";
import { useEffect } from "react";

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
                name: "Shoes",
                price: 3000,
                desc: "lorem ipsum dolor sit amit",
                src: "https://picsum.photos/200/200",
              },
              {
                name: "Tshirt",
                price: 500,

                inStock: false,
                desc: "lorem ipsum dolor sit amit",
                src: "https://picsum.photos/201/201",
              },
              {
                name: "Trekking Bag",
                price: 2000,
                inStock: true,
                desc: "lorem ipsum dolor sit amit",
                src: "https://picsum.photos/205/205",
              },
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

function ShowProduct() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fakeFetch("https://example.com/api/products").then((response) => {
      console.log(response);
      setProducts(response.data.products);
    });
  }, []);

  function handleProduct(index) {
    setSelectedProduct(products[index]);
  }

  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        {products.map((product, index) => (
          <button key={index} onClick={() => handleProduct(index)}>
            Show {product.name}
          </button>
        ))}
      </div>

      {selectedProduct && (
        <ul key={selectedProduct.name}>
          <ul>
            <img src={selectedProduct.src} alt={selectedProduct.name} />
            <p><strong>Name: </strong> {selectedProduct.name}</p>
            <p><strong>Price :</strong>{selectedProduct.price}</p>
            <p><strong>Description: </strong>{selectedProduct.desc}</p>
          </ul>
        </ul>
      )}
    </>
  );
}

export default ShowProduct;
