import React, { createContext, useEffect, useState } from 'react';
import MyCart from '../components/MyCart'
import MyWishlist from '../components/MyWishlist'
import ProductDetails from '../components/ProductDetail'
import ProductListing from '../components/ProductListing'


export const StoreContext = createContext();

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("url",url)
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

const StoreProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fakeFetch("https://example.com/api/products")
      .then(res => {
        console.log("products",res.data.products)
        setProducts(res.data.products)})
      .catch(err => console.error(err));
  }, []);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const addToWishlist = (product) => {
    setWishlist(prev => [...prev, product]);
  };

  const RemoveCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const RemoveWishlist = (id) => {
    setWishlist(prev => prev.filter(item => item.id !== id));
  };

  return (
    <StoreContext.Provider value={{ products, cart, wishlist, addToCart, addToWishlist,RemoveCart,RemoveWishlist}}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
