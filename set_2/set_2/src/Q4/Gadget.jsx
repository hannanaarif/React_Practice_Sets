/*

Build a React component called Gadgets that receives an array of products as a prop. Render
each product's name, description, and price as an ordered list. Add a border around the product
details which has price above 50000.


*/

function Gadget({ Products }) {
  console.log("products", Products);
  return (
    <>
      {Products.map((product) => (
         product.price>50000?<li style={{background:"yellow"}} key={product.id}>Name: {product.name}, Description: {product.description}, Price: {product.price}</li>:
        <li key={product.id}>Name:{product.name}, Description:{product.description}, Price:{product.price}</li>
      ))}
    </>
  );
}
export default Gadget;
