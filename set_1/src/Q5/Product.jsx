/*
Given the products data. Build a React component to display the name of all products as an
unordered list on the DOM. Order of items display can vary from the image shown below.

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
                {products.map((product) => (
                    <li key={product.name}>{product.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Product;
