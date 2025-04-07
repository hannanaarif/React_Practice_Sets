import { useParams } from "react-router-dom";
import { fakeFetch } from "./ProductListing";
import { useEffect } from "react";
import { useState } from "react";

function ProductDetail() {
  const { productId } = useParams();
  const [ProductDetail,setProductDetails]=useState([]);
  useEffect(()=>{
    fakeFetch("https://example.com/api/products").then((resp)=>{
        console.log(resp.data.products)
        const requiredData=resp.data.products.filter((product)=>product.id==productId)
        setProductDetails(requiredData[0])
        console.log(requiredData)
    })
  },[productId])

  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {productId}</p>
      <p><strong>Name: </strong>{ProductDetail.name}</p>
      <p><strong>ProductDetails: </strong>{ProductDetail.description}</p>
      <p><strong>ProductPrice: </strong> {ProductDetail.price}</p>
      <p><strong>ProductPrice: </strong> {ProductDetail.quantity}</p>
      <p><strong>ProductCategory: </strong> {ProductDetail.category}</p>
      <p><strong>Brand: </strong> {ProductDetail.brand}</p>
    </div>
  );
}

export default ProductDetail;
