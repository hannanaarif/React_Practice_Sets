/*
Consider the products data from previous question and display all the product details as
unordered list for which the number of sales is more than the quantity


Data:
const products = [
 { name: 'Perk', quantity: 10, sales: 7 },
 { name: 'Pepsi', quantity: 10, sales: 20 },
 { name: 'Coke', quantity: 18, sales: 50 },
 { name: 'Maggi', quantity: 41, sales: 22 },
 { name: '5Star', quantity: 7, sales: 9 },
]
*/

function Product({products}) {
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.filter((product) => product.sales > product.quantity).map((product) => (
                    <li key={product.name}>Name: {product.name} , Quantity: {product.quantity} , Sales: {product.sales}</li>
                ))}
            </ul>
        </div>
    )
}

export default Product;
