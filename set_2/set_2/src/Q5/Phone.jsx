function Phone({ products }) {
  return (
    <>
      <h1>Phones Only</h1>
      {products.filter((product)=>product.name=='mobile').map((product)=>(
        <li>Name: {product.name}, Description:{product.description}, Price: { product.price}</li>
      ))}
    </>
  );
}

export default Phone;
