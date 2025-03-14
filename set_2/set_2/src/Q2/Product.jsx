/*
Build a Product component that receives product name and price as props and displays them on
DOM.
The name should be in bold and blue in color.
Price should be in italics and green in color.
*/

function Product({name,price}){

    return(<>
    <h1 style={{ fontWeight: "bold", color: "blue" }}>{name}</h1>
    <h2 style={{ fontStyle: "italic", color: "green" }}>{price}</h2>
    
    </>)
}

export default Product